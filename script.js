

const inputtexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar() {
    const textoEncriptado = encriptar(inputtexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputtexto.value = "";
}



function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;

}


function botonDesencriptar() {
    const textoEncriptado = desencriptar(inputtexto.value);
    mensaje.value = textoEncriptado;
    mensaje.value = textoEncriptado;
    inputtexto.value = "";

}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDesencriptado;

}

function copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")
}




