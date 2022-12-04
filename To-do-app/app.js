const button = document.getElementById('button');
const input = document.getElementById('input');
const ol = document.querySelector('.list');
const allListBtn = ol.querySelectorAll('li button');
const deleteBtn = document.createElement('button');
const deleteAll = document.querySelector('.delete-all');

function getInput(e) {
  const input = document.getElementById('input');

  if (e.key === 'Enter') {
    const userInput = input.value;
    renderListElement(userInput);
  }
}

function renderListElement(el) {
  const li = document.createElement('li');
  li.textContent = el.trim().charAt(0).toUpperCase() + el.substring(1);
  li.setAttribute('style', 'cursor:pointer;');

  if (!el) {
    return;
  }

  updateUI(li);
  renderDeleteBtn(li);
}

function updateUI(el) {
  const ol = document.querySelector('.list');

  ol.append(el);
  clearInput();
}

function clearInput() {
  input.value = '';
}

function renderDeleteBtn(element) {
  const deleteBtn = document.createElement('button');

  deleteBtn.innerText = 'delete';
  deleteBtn.className = 'not-visible';

  element.addEventListener('click', () => {
    element.append(deleteBtn);
    deleteBtn.classList.toggle('visible');
    deleteTask(element, deleteBtn);
  });
}

function deleteTask(listItem, btn) {
  btn.addEventListener('click', () => {
    listItem.parentElement.removeChild(listItem);
  });
}

input.addEventListener('keypress', getInput);
