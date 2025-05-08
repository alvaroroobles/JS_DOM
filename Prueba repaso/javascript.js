const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

const boton_tarea = document.getElementById("boton_tarea");
const boton_imagen = document.getElementById("boton_imagen");
const imagen = document.getElementById("imagen");

boton.addEventListener("click", sqrt);
boton_tarea.addEventListener("click", addTask);
boton_imagen.addEventListener("click", toggleImagen);
  // Esta función calcula la raíz cuadrada de un número
  function sqrt() {
    let numero = document.getElementById("numero").value;
    if (numero >= 0) {
      resultado.innerHTML = " Su resultado es: " + Math.sqrt(numero);
    } else {
      resultado.innerHTML =
        " No se puede calcular la raíz cuadrada de un número negativo";
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

