const btn = document.getElementById("btn");
const password = document.getElementById("password");
btn.addEventListener("click", validar);

function validar() {
    let length = password.value.length;
    
    if(length<12){
        alert("La contraseña es demasiado corta");
    }else{
        alert("La contraseña es correcta");
    }
}