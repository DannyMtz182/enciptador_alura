function encriptar() {
    let textoOriginal = document.getElementById("texto").value;
    let textoEncriptado = "";
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    // Verificar si hay mayúsculas en el texto original
    if (/[A-Z]/.test(textoOriginal)) {
        alert("Este encriptador no acepta mayúsculas");
        return; // Salir de la función si hay mayúsculas
    }

      if (/[^a-zA-Z\s]/.test(textoOriginal)) {
        alert("Este encriptador no acepta caracteres especiales");
        return; // Salir de la función si hay caracteres especiales
    }

    for (let i = 0; i < textoOriginal.length; i++) {
        let caracter = textoOriginal[i];
        let encriptado = caracter.toLowerCase()
            .replace('e', 'enter')
            .replace('i', 'imes')
            .replace('o', 'ober')
            .replace('a', 'ai')
            .replace('u', 'ufat');

        textoEncriptado += encriptado;
    }

    if (textoOriginal.length !== 0) {
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "muneco.png";
    } else {
        muneco.src = "muneco.png";
        tituloMensaje.textContent = "Ningún texto encontrado para encriptar";
        parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}

function desencriptar(){;

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
