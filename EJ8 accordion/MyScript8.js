const boton= document.getElementById("accordion-button");
const contenedor= document.querySelector(".accordion-content");

boton.addEventListener("click", abrir);

function abrir(){
    contenedor.classList.toggle("active");
}