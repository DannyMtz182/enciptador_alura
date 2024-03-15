function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
                            .replace(/enter/gi, "e")
                            .replace(/\bimes/gi, "i")
                            .replace(/ober/gi, "o")
                            .replace(/ai/gi, "a")
                            .replace(/ufat/gi, "u");

    if(texto.length != 0)
    {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con Éxito";
        parrafo.textContent = "";
        muneco.src  = "muneco.png";
    }
    else{
        muneco.src = "muneco.png";
        tituloMensaje.textContent = "Ningún texto encontrado para encriptar";
        parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";
        alert ("Debes ingresar un texto");
    }
}

function desencriptar(){;

let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let muneco = document.getElementById("muneco");

let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ober/gi, "o")
                        .replace(/ai/gi, "a")
                        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value =textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con Éxito";
        parrafo.textContent = "";
        muneco.src  = "muneco.png";
    } else {
        muneco.src = "muneco.png";
        tituloMensaje.textContent = "Ningún texto encontrado para encriptar";
        parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";
        alert ("Debes ingresar un texto");
    }
}
