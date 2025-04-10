const btn_task = document.getElementById("btn-task");
const listado=document.getElementById("list");
const input_task = document.getElementById("task");

btn_task.addEventListener("click", guardar);

function guardar() {
    listado.innerHTML += input_task.value + "<br>";
}