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
  const ind = parseInt(index.match(/\d+/)[0], 10);
  allList.splice(ind - 1, 1);
  for (let i = 0; i < allList.length; i += 1) {
    allList[i].index = i + 1;
  }
  localStorage.setItem('todo', JSON.stringify(allList));
}
export function editList(index, newDesc, allList) {
  allList[index].description = newDesc;
  localStorage.setItem('todo', JSON.stringify(allList));
}