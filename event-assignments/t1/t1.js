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
   <label for="todo-${id}">${todo.task}</label></li>`
  );
  id = id + 1;
});

// TODO CLEAN LOGS
// Add event listeners
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', e => {
    // Get the digit from checkbox id string
    targetId = e.target.id.match(/\d+/)[0] - 1;
    todoList[targetId].completed = e.target.checked;
    console.log(todoList);
  });
});
