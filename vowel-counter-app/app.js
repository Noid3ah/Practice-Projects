const input = document.getElementById('input');
const output = document.querySelector('.output');
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(userInput) {
  let count = 0;
  if (!userInput) {
    return;
  }

  for (const char of userInput) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  let singularPlural = '';
  let vow = '';

  if (count <= 1) {
    singularPlural = 'is';
    vow = 'vowel';
  } else {
    singularPlural = 'are';
    vow = 'vowels';
  }

  updateUI({
    v: vow,
    sp: singularPlural,
    u: userInput,
    c: count,
  });
  clearInput();
}

function updateUI({ u, sp, c, v }) {
  output.textContent = `In (${u}), There ${sp} ${c} ${v}.`;
}

function clearInput() {
  input.value = '';
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const inputValue = input.value;
    const userInput = inputValue.trim().toLowerCase();
    countVowels(userInput);
  }
});
