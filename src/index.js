import { addList, removeList, editList } from './modules/operation.js';
import { updateStatus, clearCompleted } from './modules/checkout.js';
import './index.css';

const allList = JSON.parse(localStorage.getItem('todo')) || [];
const bkList = document.querySelector('.lists');

const createListItem = (list) => {
  const listItem = document.createElement('li');
  const itemDiv = document.createElement('div');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const deleteIcon = document.createElement('i');

  itemDiv.className = `${list.index}`;
  label.className = 'list-desc';
  listItem.className = `items ${list.index}`;
  checkbox.type = 'checkbox';
  checkbox.id = `checkbox-${list.index}`;
  checkbox.className = 'checkbox';
  checkbox.name = `checkbox-${list.index}`;
  checkbox.checked = list.completed;
  label.textContent = list.description;
  label.setAttribute('contenteditable', 'true');
  deleteIcon.className = 'fa fa-trash delete';
  itemDiv.appendChild(checkbox);
  itemDiv.appendChild(label);
  listItem.appendChild(itemDiv);
  listItem.appendChild(deleteIcon);

  return listItem;
};

const edit = document.querySelector('.editTask');
const arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {
  if (edit.value !== '') {
    addList(allList, edit.value);
    edit.value = '';
    bkList.textContent = '';
    allList.forEach((list) => {
      const listItem = createListItem(list);
      bkList.appendChild(listItem);
    });
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
  bkList.textContent = '';
  updatedList.forEach((list) => {
    const listItem = createListItem(list);
    bkList.appendChild(listItem);
  });
});
