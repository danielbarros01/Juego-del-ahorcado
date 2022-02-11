
let arrayPalabras = [];

let palabraAgregar = document.getElementById("inputPalabraNueva");

btnGuardarPalabra.addEventListener("click", function(){
    ingresarPalabra(palabraAgregar.value);
});


//funcion que realiza todas las validaciones antes de agregar la palabra
function ingresarPalabra(palabra) {
    //verificar que no esta vacio
    if (palabra.length < 2) {
        swal("X", "Tiene que agregar una palabra", "warning");
    }else if (caracteresEspeciales(palabra)) {
        swal("X", "No puede contener caracteres especiales ni acentos", "warning");
        palabraAgregar.value = null;
    }else if(palabraRepetida(palabra, arrayPalabras)){
        swal("X", "La palabra ya esta ingresada", "info");
        palabraAgregar.value = null;
    }else{
        arrayPalabras.push(palabra);
        swal(`${palabra}`, `Palabra ${palabra} ingresada con exito`, "success");
        console.log(arrayPalabras);
        palabraAgregar.value = null;
    }
}
//------------

//cambiar a mayuscula las letras que ingresan al input de nueva palabra
function cambiarMayusc(e) {
    e.value = e.value.toUpperCase();
}

//retorna true si hay caracteres
function caracteresEspeciales(palabra) {
    var caracteresProhibidos = new RegExp('^[A-Z]+$', 'i');
    caracteresProhibidos.lastIndex = 0;
    return !caracteresProhibidos.test(palabra);
}

//determina si hay palabra repetida
function palabraRepetida(palabraEntra, array) {
    for (var palabra1 of array) {
        if(palabra1 == palabraEntra)
            return true;
    }
}