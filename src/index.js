import displayList from './modules/display.js';

import { addList, removeList, editList } from './modules/operation.js';

// import './index.css';
const allList = JSON.parse(localStorage.getItem('todo')) || [];

const bkList = document.querySelector('.lists');
displayList(bkList, allList);
const edit = document.querySelector('.editTask');
const arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {
  if (edit.value !== '') {
    addList(allList, edit.value);
    const newList = JSON.parse(localStorage.getItem('todo')) || [];
    bkList.textContent = '';
    displayList(bkList, newList);
    edit.value = '';
  }
});
bkList.addEventListener('click', () => {
  const dots = document.querySelectorAll('.dots');
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      removeList(dot.parentNode.className, allList);
      const newList = JSON.parse(localStorage.getItem('todo')) || [];
      bkList.textContent = '';
      displayList(bkList, newList);
    });
  });

  const description = document.querySelectorAll('.list-desc');
  description.forEach((desc) => {
    desc.addEventListener('input', () => {
      const list = desc.parentNode.className;
      const newDesc = desc.textContent;
      editList(list - 1, newDesc, allList);
    });
  });
});