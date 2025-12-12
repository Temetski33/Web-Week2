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

// Get the ul element
const ul = document.querySelector('ul');

let id = 1;
todoList.forEach(todo => {
  let checked = '';
  if ((todo.completed === true)) {
    checked = ' checked';
  }

  ul.insertAdjacentHTML(
    'beforeend',
    `<li><input type="checkbox" id="todo-${id}"${checked}>
   <label for="todo-${id}">${todo.task}</label></li>`
  );
  id = id + 1;
});
