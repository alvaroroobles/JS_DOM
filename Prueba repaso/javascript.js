const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

const boton_tarea = document.getElementById("boton_tarea");
const boton_imagen = document.getElementById("boton_imagen");
const imagen = document.getElementById("imagen");
const boton_z = document.getElementById("boton_z");

const boton_modal= document.getElementById("botonModal");

boton.addEventListener("click", sqrt);
boton_tarea.addEventListener("click", addTask);
boton_imagen.addEventListener("click", toggleImagen);
boton_z.addEventListener("click", arriba);
boton_z.addEventListener("click", rojo);

boton_modal.addEventListener("click", dialog);


  // Esta función calcula la raíz cuadrada de un número
  function sqrt() {
    let numero = document.getElementById("numero").value;
    if (numero >= 0) {
      resultado.innerHTML = " Su resultado es: " + Math.sqrt(numero);
    } else {
      resultado.innerHTML =" No se puede calcular la raíz cuadrada de un número negativo";
    }
  }

  function addTask() {
    const input_task = document.getElementById("task");
    const listado = document.getElementById("list");

    const li = document.createElement("li");
    const p = document.createElement("p");

    p.innerHTML = input_task.value.trim();
    li.appendChild(p);
    listado.appendChild(li);

    input_task.value = ""; // Limpia bien el input
  }

  function toggleImagen() {
    imagen.classList.toggle("ocultar");
  }

function arriba(){
    imagen2.classList.toggle("zindex");
    imagen2.style.backgroundColor = "red";
}

function rojo(){
    let div= document.getElementById("div1");
    div1.style.backgroundColor = "red";
}

function dialog(){
    document.getElementById("textoculto").display = "flex";
}

function close(){
    let dialogo= document.querySelector("dialog");
    dialogo.close();
}