let entradaTexto = document.querySelector(".presentacion__entrada__texto");
let salidaTexto = document.querySelector(".presentacion__salida__texto");
let seccionTexto1 = document.querySelector(".texto1");
let seccionTexto2 = document.querySelector(".texto2");
let botonCopiar = document.querySelector(".copiar");
let texto1Original = seccionTexto1.textContent;
let texto2Original = seccionTexto2.textContent;

function validacion(textoValidar) {
    // Expresión regular para detectar mayúsculas, acentos y caracteres especiales
    const regex = /[A-ZÁÉÍÓÚÑáéíóú\W\d]/;
    // Retorna true si no se encuentra ningún carácter inválido, de lo contrario false
    return !regex.test(textoValidar);
}

function encriptar() {
    let texto = entradaTexto.value;
    let salida = "";
    if(!validacion(texto)){
        error();
        return;
    }
    for(let posicion = 0; posicion < texto.length; posicion++){
        if(texto.charAt(posicion) == "a"){
            salida = salida + "ai";
        }
        else if(texto.charAt(posicion) == "e"){
            salida = salida + "enter";
        }
        else if(texto.charAt(posicion) == "i"){
            salida = salida + "imes";
        }
        else if(texto.charAt(posicion) == "o"){
            salida = salida + "ober";
        }
        else if(texto.charAt(posicion) == "u"){
            salida = salida + "ufat";
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function desencriptar() {
    let texto = entradaTexto.value;
    let salida = "";
    if(!validacion(texto)){
        alert("Texto invalido, verifique su texto.")
        return;
    }
    for(let posicion = 0; posicion < texto.length; posicion++){
        if(texto.charAt(posicion) == "a" && texto.charAt(posicion + 1) == "i"){
            salida = salida + "a";
            posicion = posicion + 1;
        }
        else if(texto.charAt(posicion) == "e" && texto.charAt(posicion + 1) == "n" && texto.charAt(posicion + 2) == "t" && texto.charAt(posicion + 3) == "e" && texto.charAt(posicion + 4) == "r"){
            salida = salida + "e";
            posicion = posicion + 4;
        }
        else if(texto.charAt(posicion) == "i" && texto.charAt(posicion + 1) == "m" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "s"){
            salida = salida + "i";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "o" && texto.charAt(posicion + 1) == "b" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "r"){
            salida = salida + "o";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "u" && texto.charAt(posicion + 1) == "f" && texto.charAt(posicion + 2) == "a" && texto.charAt(posicion + 3) == "t"){
            salida = salida + "u";
            posicion = posicion + 3;
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function error(){
    seccionTexto1.textContent = "Hay un error. Intenta nuevamente.";
    seccionTexto2.textContent = "Ingresa únicamente letras en minúsculas.";
    seccionTexto1.style.color = "red"; 
    seccionTexto1.style.display = "block";
    seccionTexto2.style.color = "red"; 
    seccionTexto2.style.display = "block";
}
         

function ocultar(){
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    botonCopiar.style.display = "";
}

function mostrar(){
    salidaTexto.style.background = "";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    botonCopiar.style.display = "none";
}

function copiar(){
    let copia =salidaTexto.value;
    navigator.clipboard.writeText(copia);
    
    let mensaje = document.querySelector(".presentacion__cuadro__mensaje_copiado");
    mensaje.textContent = "Texto copiado";
    mensaje.style.display = "block";

    salidaTexto.style.background = "";
    seccionTexto1.textContent = texto1Original;
    seccionTexto1.style.color = ""; 
    seccionTexto2.textContent = texto2Original;
    seccionTexto2.style.color = "";


    setTimeout(() => {
        mensaje.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}