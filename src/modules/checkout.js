export function updateStatus(index, completed, allList) {
  allList[index].completed = completed;
  localStorage.setItem('todo', JSON.stringify(allList));
}

export function clearCompleted(allList) {
  const updatedList = allList.filter((item) => !item.completed);
  localStorage.setItem('todo', JSON.stringify(updatedList));
  return updatedList;
}
