const settingsBtn = document.querySelector('.settings-btn');
const difficultyForm = document.querySelector('.difficulty-container');
const difficultySelect = document.getElementById('difficulty');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const randomWordEl = document.getElementById('random-word');
const textEl = document.getElementById('text');
const gameOverOverlay = document.getElementById('game-over-overlay');

// API random words will be fetched here instead of that 
const words = ['forecast', 'often', 'selection', 'dining', 'video', 'motivation', 'fluff'];

let randomWord;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

getRandomWord();

function showRandomWord() {
  const word = getRandomWord();
  randomWordEl.innerText = word;
}

showRandomWord();

function checkWord(e) {
  const currentWord = e.target.value
  // if (randomWord === e.target.value) {
  //   console.log(ok);
  // }
}

checkWord();

// Event Listeners
textEl.addEventListener('input', checkWord);