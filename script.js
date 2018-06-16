var puntajeUsuario = 0;
var puntajeBot = 0;
var selec = ["piedra", "papel", "tijera"];
document.getElementById("usuario").innerHTML = puntajeUsuario;
document.getElementById("bot").innerHTML = puntajeBot;

function piedra() {

    var selecUsuario = selec[0];
    var rand = selec[Math.floor(Math.random() * selec.length)];
    
    if (rand == selecUsuario){
        var a = document.getElementById("compare");
        a.innerHTML = "PIEDRA | PIEDRA";
        document.getElementById("resultado").innerHTML = "EMPATE";
    }
    else if (rand == selec[1]){
        var a = document.getElementById("compare");
        a.innerHTML = "PIEDRA | PAPEL";
        puntajeBot++;
        document.getElementById("bot").innerHTML = puntajeBot;
        document.getElementById("resultado").innerHTML = "PERDISTE :(";
    }
    else {
        var a = document.getElementById("compare");
        a.innerHTML = "PIEDRA | TIJERA";
        puntajeUsuario++;
        document.getElementById("usuario").innerHTML = puntajeUsuario;
        document.getElementById("resultado").innerHTML = "¡GANASTE! :D";
    }
}

function papel() {

    var selecUsuario = selec[1];
    var rand = selec[Math.floor(Math.random() * selec.length)];
    
    if (rand == selecUsuario){
        var a = document.getElementById("compare");
        a.innerHTML = "PAPEL | PAPEL";
        document.getElementById("resultado").innerHTML = "EMPATE";
    }
    else if (rand == selec[0]){
        var a = document.getElementById("compare");
        a.innerHTML = "PAPEL | PIEDRA";
        puntajeUsuario++;
        document.getElementById("usuario").innerHTML = puntajeUsuario;
        document.getElementById("resultado").innerHTML = "¡GANASTE! :D";
    }
    else {
        var a = document.getElementById("compare");
        a.innerHTML = "PAPEL | TIJERA";
        puntajeBot++;
        document.getElementById("bot").innerHTML = puntajeBot;
        document.getElementById("resultado").innerHTML = "PERDISTE :(";
    }
}

function tijera() {

    var selecUsuario = selec[2];
    var rand = selec[Math.floor(Math.random() * selec.length)];
    
    if (rand == selecUsuario){
        var a = document.getElementById("compare");
        a.innerHTML = "TIJERA | TIJERA";
        document.getElementById("resultado").innerHTML = "EMPATE";
    }
    else if (rand == selec[0]){
        var a = document.getElementById("compare");
        a.innerHTML = "TIJERA | PIEDRA";
        puntajeBot++;
        document.getElementById("bot").innerHTML = puntajeBot;
        document.getElementById("resultado").innerHTML = "PERDISTE :(";
    }
    else {
        var a = document.getElementById("compare");
        a.innerHTML = "TIJERA | PAPEL";
        puntajeUsuario++;
        document.getElementById("usuario").innerHTML = puntajeUsuario;
        document.getElementById("resultado").innerHTML = "¡GANASTE! :D";
    }
}
