const form = document.getElementById("create-task-form");
const task = document.querySelector("#new-task-description");
const myToDos = document.querySelector("#tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    addTasks();
    form.reset();
  }); 
});

function addTasks() {
  let li = document.createElement('li');
  let button = document.createElement('button');

  li.textContent = `${task.value} `
  myToDos.appendChild(li);

  button.textContent = 'x';
  button.addEventListener('click', deleteTask);
  myToDos.lastElementChild.appendChild(button);
}

function deleteTask(event) {
  event.target.parentNode.remove();
}