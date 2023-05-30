const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTask);
    const label = document.createElement('label');
    label.textContent = taskText;  
    li.appendChild(checkbox);
    li.appendChild(label);  
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function toggleTask(event) {
  const checkbox = event.target;
  const li = checkbox.parentNode;
  const label = li.querySelector('label');
  label.classList.toggle('completed');
}

function deleteTask(event) {
  const deleteButton = event.target;
  const li = deleteButton.parentNode;
  taskList.removeChild(li);
}
const deleteAllButton = document.getElementById('deleteAllButton');
deleteAllButton.addEventListener('click', deleteAllTasks);

function deleteAllTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}