const btn = document.getElementById("btn");
const password = document.getElementById("password");
const resultado = document.getElementById("resultado");
btn.addEventListener("click", validar);

function validar() {
    let length = password.value.length;
    if(length<12){
        resultado.innerHTML = "La contraseña es muy corta";
    }else{
        resultado.innerHTML = "La contraseña es correcta";
    }
}