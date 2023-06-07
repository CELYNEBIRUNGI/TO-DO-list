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

const displayList = (lists, allList) => {
  lists.innerHTML = '';

  allList.forEach((list) => {
    const listItem = createListItem(list);
    lists.appendChild(listItem);
  });
};

export default displayList;
