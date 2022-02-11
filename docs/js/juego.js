//arrayPalabras es el array que esta en palabras.js
let btnNuevoJuego = document.getElementById("btnNuevoJuego");

let palabraSorteada;//la palabra que se sorteo
let palabra_guiones;//la palabra de arriba pero con guiones

let letrasBuenas = [];
let letrasMalas = []; //aquí van las letras que estan mal
let aciertos=0;//controlara si he acertado letras
let errores=0;//servira para ir dibujando el canvas y saber cuando perdí

var parrafoPalabra = document.getElementById("p_palabra");
var parrafoLetrasMalas = document.getElementById("p_LetrasErroneas");
var inputLetra = document.getElementById("inputLetra");

//-----------------------------------------------------------------------------------------

//click en iniciar Juego:
btnNewGame.addEventListener("click", function () {
    iniciarJuego(arrayPalabras);
});
btnNuevoJuego.addEventListener("click", function () {
    iniciarJuego(arrayPalabras);
});

function iniciarJuego(plbras) {
    if (arrayPalabras < 1) //si no hay palabras en el array
        swal("Ingrese palabras", "Debe ingresar palabras para jugar", "info");
    else {
        //muestre la seccion
        secGame.classList.remove("secNewGame");

        //sorteo, cambioxguion, muestro parrafo
        palabraSorteada = sortearPalabra(arrayPalabras);
        palabra_guiones = remplazarPalabraPorGuiones(palabraSorteada);
        parrafoPalabra.innerHTML = palabra_guiones;

        parrafoLetrasMalas.innerHTML = null;
        aciertos=0;
        errores=0;
        letrasMalas = [];
        letrasBuenas = [];

        limpiarCanvas();
        dibujarBase();
    }
}

function validar() {
    var letra = validarLetra();

    if(caracteresEspeciales(letra)){
        swal("", "No se permiten caracteres especiales ni acentos", "warning");
    }
    else if(palabraRepetida(letra, letrasMalas.concat(letrasBuenas))){
        swal("", "Ya ingreso esta letra", "info");
    }
    else{
        acierto(letra, palabraSorteada);
        if(aciertos===palabraSorteada.length){
            swal("Ganaste, Felicidades!", `Has ganado, la palabra es ${palabraSorteada}`, "success");
            iniciarJuego(arrayPalabras);
        }
        dibujarAhorcado(errores);
        if(errores===6){
            swal("Fin del Juego", "Has perdido", "error");
            iniciarJuego(arrayPalabras);
        }
    }

}

//-----------------------------------------------------------------------------------------


//funcion que verifica si acerte la letra que ingrese
function acierto(l, palabra) {
    var posicion = 0;
    var aciertosLetra=0;

    for(var letra of palabra){
        if(l === letra){
            palabra_guiones = palabra_guiones.replaceAt(posicion*2,l);
            parrafoPalabra.innerHTML = palabra_guiones;
            aciertos++;
            aciertosLetra++;
            letrasBuenas.push(l);
        }
        posicion++;
    }

    //inserto la letra mala al array de letras malas y sumo un error
    if(aciertosLetra==0){
        letrasMalas.push(l);
        errores++;
        parrafoLetrasMalas.innerHTML = letrasMalas;
    }
}

//retorna la letra que ingrese
function validarLetra() {
    var letra = inputLetra.value.toUpperCase();
    inputLetra.value = null;
    return letra;
}


function sortearPalabra(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function remplazarPalabraPorGuiones(palabra) {
    return palabra.replace(/./g, "_ ");
}




//Funcion para remplazar una letra en cierta posicion
String.prototype.replaceAt = function (index, character) { return this.substr(0, index) + character + this.substr(index + character.length); }