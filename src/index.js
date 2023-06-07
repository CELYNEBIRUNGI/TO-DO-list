import './index.css';

const allList = [
  {
    index: 1,
    description: 'Tailwind Library',
    complated: false,
  },
  {
    index: 2,
    description: 'Bootstrap Framework',
    complated: false,
  },
  {
    index: 3,
    description: 'Bulmas Library',
    complated: false,
  },
];
const bkList = document.querySelector('.lists');
const displayList = () => {
  for (let i = 0; i < allList.length; i += 1) {
    bkList.innerHTML += `
    <div class='items'>
      <div class='form-checkbox'>
        <input type="checkbox" id="check" name="check" >
        <label class="label" id="label" for="check">${allList[i].description}</label>
      </div>
      <i class="fa fa-ellipsis-v dots" aria-hidden="true"></i>
    </div>
  `;
  }
};
window.onload = displayList();