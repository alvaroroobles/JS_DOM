const botonMostrar = document.getElementById("mostrar");
const contenedor = document.querySelector(".contenedor");

botonMostrar.addEventListener("click", mostrar);
// Agregamos el evento al boton

function mostrar() {
    // Le añado el css active al contenedor
   contenedor.classList.toggle("active");
}

