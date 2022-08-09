
const encriptado = {a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"};
document.getElementById("textoEncriptado").style.display = "none";

function encriptar(){

    document.getElementById("mensajeNoEncontrado").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "inline";
    let texto =  document.getElementById("texto").value;
    let textoEncriptado = texto.replace(/[aeiou]/g,i=>encriptado[i]);
    
    return textoEncriptado;
}

function validarMayusculas() {    
    
        if(document.getElementById("texto").value.match(/^[a-z ]{1,2000}$/)) {
            document.getElementById("tres").value = encriptar();
        } else {
            alert("Solo letras minúsculas, sin acentos.");
        }
}

function desencriptar(){
    let textoEncriptado = document.getElementById("tres").value;
    let texto= textoEncriptado.replace(/ai/g,"a")
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    document.getElementById("tres").value= texto;
}

function copiar(){
    let textoCopiado = document.getElementById("tres");
    textoCopiado.select();
    document.execCommand('copy');
    alert("Se copio el texto en el portapapeles");
}

function borrarTodo(){
    document.getElementById("tres").value ="";
    document.getElementById("texto").value="";
    document.getElementById("textoEncriptado").style.display = "none";
    document.getElementById("mensajeNoEncontrado").style.display = "inline";
}


    


