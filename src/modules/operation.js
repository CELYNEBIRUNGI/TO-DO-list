export function addList(allList, desc) {
  const newList = {
    index: allList.length + 1,
    description: desc,
    completed: false,
  };
  allList.push(newList);
  localStorage.setItem('todo', JSON.stringify(allList));
}

export function removeList(index, allList) {
  allList.splice(index, 1);
  for (let i = index; i < allList.length; i++) {
    allList[i].index = i + 1;
  }
  localStorage.setItem('todo', JSON.stringify(allList));
}

export function editList(index, newDesc, allList) {
  allList[index].description = newDesc;
  localStorage.setItem('todo', JSON.stringify(allList));
}
