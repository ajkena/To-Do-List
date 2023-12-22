const text = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const taskList = document.querySelector('.my-list');
const form = document.querySelector('form');

let todoList = [];

const addTask = (e) => {
  e.preventDefault();

  todoInput = text.value.trim();

  if (todoInput.length <= 0) {
    alert('Please add a task :)');
  } else {
    const todo = {
      id: generateId(),
      text: text.value,
      completed: false,
    };
    todoList.push(todo);
    text.value = '';

    renderTasks();
    console.log(todoList);
  }
};

const generateId = () => {
  return Math.floor(Math.random() * 100);
};

const deleteTask = (id) => {
  todoList = todoList.filter((e) => e.id !== id);
  renderTasks();
};

const toggleCompleted = (id) => {
  todoList = todoList.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTasks();
};

const renderTasks = () => {
  taskList.innerHTML = '';

  todoList.forEach((todo) => {
    const todoEl = document.createElement('li');
    const textEl = document.createElement('span');
    const deleteBtn = document.createElement('button');

    textEl.textContent = todo.text;
    deleteBtn.textContent = 'X';

    deleteBtn.addEventListener('click', () => deleteTask(todo.id));
    if (todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.addEventListener('click', () => toggleCompleted(todo.id));

    todoEl.appendChild(textEl);
    todoEl.appendChild(deleteBtn);

    taskList.appendChild(todoEl);
  });
};

form.addEventListener('submit', addTask);
renderTasks();
