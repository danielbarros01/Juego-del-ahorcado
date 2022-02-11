//Cargar seccion de nuevas palabras
let btnNewWord = document.getElementById("btnAgregarPalabras");
let secNewWord = document.getElementById("secPalabras");

btnNewWord.addEventListener("click", function () {
    secNewWord.classList.remove("secPalabrs");
});


//volver atras de seccion palabras
let btnCancelarPalabra = document.getElementById("btnCancelar");
btnCancelarPalabra.addEventListener("click", function () {
    secNewWord.classList.add("secPalabrs");
});
//--------


//Cargar seccion del juego
let btnNewGame = document.getElementById("btnIniciar");
let secGame = document.getElementById("secNewGame");


//volver atras de seccion Juego
let btnDesistirJuego = document.getElementById("btnDesistir");
btnDesistirJuego.addEventListener("click", function () {
    secGame.classList.add("secNewGame");
});
//--------

//OTROS BOTONES

let btnGuardarPalabra = document.getElementById("btnGuardarPalabra");
