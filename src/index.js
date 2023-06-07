import { addList, removeList, editList } from './modules/operation.js';
import { updateStatus, clearCompleted } from './modules/checkout.js';
import './index.css'

const allList = JSON.parse(localStorage.getItem('todo')) || [];
const bkList = document.querySelector('.lists');
displayList(bkList, allList);

const edit = document.querySelector('.editTask');
const arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {
  if (edit.value !== '') {
    addList(allList, edit.value);
    edit.value = '';
    displayList(bkList, allList);
  }
});

bkList.addEventListener('click', (event) => {
  const { target } = event;

  if (target.classList.contains('delete')) {
    const listItem = target.parentNode;
    const listIndex = Array.from(bkList.children).indexOf(listItem);

    removeList(listIndex, allList);
    listItem.remove();
  }
});

bkList.addEventListener('input', (event) => {
  const { target } = event;

  if (target.classList.contains('list-desc')) {
    const listItem = target.parentNode;
    const listIndex = Array.from(bkList.children).indexOf(listItem);
    const newDesc = target.textContent;

    editList(listIndex, newDesc, allList);
  }
});

bkList.addEventListener('change', (event) => {
  const { target } = event;

  if (target.classList.contains('checkbox')) {
    const listItem = target.parentNode.parentNode;
    const listIndex = Array.from(bkList.children).indexOf(listItem);
    const completed = target.checked;

    updateStatus(listIndex, completed, allList);
  }
});

const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', () => {
  const updatedList = clearCompleted(allList);
  displayList(bkList, updatedList);
});
