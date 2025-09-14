/* Задача на взаимодействие с DOM: Динамическое обновление списка задач
Описание: У вас есть веб-приложение для управления задачами (To-Do List). Пользователи могут добавлять новые задачи, а так же сортировать задачи через интерфейс. Ваша задача — реализовать функционал, который будет обновлять список задач на странице в реальном времени, используя JavaScript и взаимодействие с DOM.
*/

const taskInput = document.getElementById("new-task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
  }
}

addTaskButton.addEventListener("click", addTask);

renderTasks();
