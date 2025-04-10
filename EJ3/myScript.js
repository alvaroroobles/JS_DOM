const btn_task = document.getElementById("btn-task");
const listado=document.getElementById("list");
const input_task = document.getElementById("task");

btn_task.addEventListener("click", addTask);

function addTask() {
    const li= document.createElement("li");
    const p = document.createElement("p");
    // El p va a tener el texto del input
    p.textContent = input_task.value;
    // El li va a tener el p
    li.appendChild(p);
    // El listado va a tener el li
    listado.appendChild(li);

    // Limpiamos el input
    input_task.value = " ";
}