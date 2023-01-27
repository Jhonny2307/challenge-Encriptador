function Encriptar (){
    var texto = document.querySelector(".text-area").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".text-area").value;

    ocultar()
}

var botonEncriptar = document.querySelector(".btn-encriptar");
botonEncriptar.onclick = Encriptar;

function ocultar(){
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningunMensaje").style.display = "none";
    document.getElementById("textoAbajo").style.display = "none";
}

function Desencriptar (){
    var texto = document.querySelector(".text-area").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".mensaje").value;

}

var botonDesencriptar = document.querySelector(".btn-desencriptar");
botonDesencriptar.onclick = Desencriptar;

function copiar () {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
    alert("Copiaste Mensaje")
    
  }

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiar;