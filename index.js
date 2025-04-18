document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create the task element
  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;

  // Append the task to the list
  document.getElementById('task-list').appendChild(li);

  // Show an alert confirming the task addition
  alert("Task added successfully!");

  // Clear the input field
  taskInput.value = '';
}

function deleteTask(button) {
  // Remove the task item from the list
  const taskItem = button.parentElement;
  taskItem.remove();
}
