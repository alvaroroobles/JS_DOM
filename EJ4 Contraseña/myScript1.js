const btn = document.getElementById("btn");
const password = document.getElementById("password");
const resultado = document.getElementById("result");

//btn.addEventListener("click", validar);


function validar() {
    let length = password.value.length;
    
    if(length<12){
        resultado.innerHTML = "La contraseña es incorrecta, debe tener al menos 12 caracteres";
    }else{
        resultado.innerHTML = "La contraseña es correcta";
    }
}