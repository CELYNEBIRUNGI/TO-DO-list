import displayList from './modules/display.js';
import { addList, removeList, editList } from './modules/operation.js';

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
