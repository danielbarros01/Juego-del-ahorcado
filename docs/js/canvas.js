var canvas = document.querySelector("#canvas");

//para que no se vea pixelado
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//doy el contexto de dibujo
var contexto = canvas.getContext("2d");


//-------------------------

function dibujarAhorcado(errores) {
    switch (errores) {
        case 1:
            dibujarCirculo(750, 140, 40);//1.cabeza
            break;
        case 2:
            dibujarLinea(750, 180, 750, 400);//2.columna
            break;
        case 3:
            dibujarLinea(750, 230, 700, 280);//3.brazo
            break;
        case 4:
            dibujarLinea(750, 230, 800, 280);//4.brazo 2
        break;
        case 5:
            dibujarLinea(750,400,700,480);//5.pierna
        break;
        case 6:
            dibujarLinea(750,400,800,480);//pierna
        break;
    }
}

//-------------------------






function limpiarCanvas(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarBase() {
    //base
    contexto.fillRect(500, 650, 100, 20);

    dibujarLinea(550, 650, 550, 60);
    dibujarLinea(550, 60, 750, 60);
    dibujarLinea(750, 60, 750, 100);
    //...
}
function dibujarLinea(ejeX, ejeY, ejeXLinea, ejeYLinea) {
    contexto.beginPath();
    contexto.moveTo(ejeX, ejeY);
    contexto.lineTo(ejeXLinea, ejeYLinea);
    contexto.lineWidth = 4;
    contexto.stroke();
}

function dibujarCirculo(origenX, origenY, rango) {
    contexto.beginPath();
    contexto.arc(origenX, origenY, rango, 0, Math.PI * 2, true); //boolean para ver si se dibuja en sentido horario u al reves
    contexto.stroke();
}