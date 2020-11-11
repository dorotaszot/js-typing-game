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
let score = 0;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

getRandomWord();

function showRandomWord() {
  randomWord = getRandomWord();
  randomWordEl.innerText = randomWord;
  console.log(randomWordEl.innerText);
}

showRandomWord();

function updateScore() {
  score++;
  scoreEl.innerText = score;
}

function checkWord(e) {
  if (randomWord === e.target.value) {
    setTimeout(() => {
      textEl.value = '';
      getRandomWord();
      showRandomWord()
      updateScore()
    }, 300);

  }
}

// checkWord();

// Event Listeners
textEl.addEventListener('input', checkWord);