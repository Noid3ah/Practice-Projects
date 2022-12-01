const button = document.getElementById('button');

function getInput() {
  const input = document.getElementById('input');

  const userInput = input.value; //?
  renderListElement(userInput); //?
}

function renderListElement(el) {
  el.trim();
  const li = document.createElement('li');
  li.textContent = el;

  if (!el) {
    return;
  }

  // const all_Li = document.querySelectorAll(li);

  updateUI(li);
  renderDeleteBtn(li);
  // deleteTask(li);
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

button.addEventListener('click', getInput);
