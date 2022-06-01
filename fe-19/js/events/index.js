const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      listItemElem.append(checkbox, text);

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// 1. Уметь навешивать ивенты(add events to elements) +++
// 2. Писать обработчики (write handlers)

// ----------------------------------------------------------
const createBtn = document.querySelector('.create-task-btn');

// input: string, callback
// output: undefined

// callback
// input: event(optional)
// output: undefined
function createTaskHandler(event) {
  console.log(event.target);
}

createBtn.addEventListener('click', createTaskHandler);

// ----------------------------------------------------------
