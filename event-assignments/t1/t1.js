// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ul = document.querySelector('ul');

let id = 1;
todoList.forEach(todo => {
  let checked = '';
  if (todo.completed === true) {
    checked = ' checked';
  }

  ul.insertAdjacentHTML(
    'beforeend',
    `<li><input type="checkbox" id="todo-${id}"${checked}>
   <label for="todo-${id}">${todo.task}</label>
   <button class="delete-btn" id="${id}">Del</button></li>`
  );
  id = id + 1;
});

// Add checkbox event listeners
const addCheckboxListeners = () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', e => {
      const id = e.target.id.match(/\d+/)[0];

      const todo = todoList.find(todo => todo.id == id);
      if (todo) {
        todo.completed = e.target.checked;
      }

      console.log(todoList);
    });
  });
};

// Add delete btn event listeners
const addDeleleListeners = () => {
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const liId = e.target.id;
      removeListItem(liId);
    });
  });
};

// Remove li item function
const removeListItem = id => {
  const checkbox = document.querySelector(`#todo-${id}`);
  if (checkbox) {
    const liToRemove = checkbox.parentElement;
    ul.removeChild(liToRemove);
  }
  const index = todoList.findIndex(todo => todo.id == id);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
  console.log(todoList);
};

// Add item function
const addItem = () => {
  const task = 'party';

  const todo = {id: id, task: task, completed: false};
  todoList.push(todo);

  ul.insertAdjacentHTML(
    'beforeend',
    `<li><input type="checkbox" id="todo-${id}">
   <label for="todo-${id}">${task}</label>
   <button class="delete-btn" id="${id}">Del</button></li>`
  );
  addCheckboxListeners();
  addDeleleListeners();
  id = id + 1;
  console.log(todoList);
};

// Add add btn event listeners
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    addItem();
  });
});

addCheckboxListeners();
addDeleleListeners();
