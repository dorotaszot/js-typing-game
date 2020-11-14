const settingsBtn = document.querySelector('.settings-btn');
const difficultyForm = document.querySelector('.difficulty-container');
const difficultySelect = document.getElementById('difficulty');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const randomWordEl = document.getElementById('random-word');
const textEl = document.getElementById('text');
const gameOverOverlay = document.getElementById('game-over-overlay');
const selectDifficulty = document.getElementById('difficulty');


// API random words will be fetched here instead of that 
// async function getWords() {
//   const res = await fetch('https://api.datamuse.com/words?');
//   const data = res.json();
//   return data;
// }

// async function getWordsFromApi() {
//   const randomWords = await getWords();
//   console.log(randomWords);
// }

// getWordsFromApi();

const words = ['forecast', 'often', 'selection', 'dining', 'video', 'motivation', 'fluff'];

let randomWord;
let score = 0;
let time = 11;
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

selectDifficulty.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

getRandomWord();

function showRandomWord() {
  randomWord = getRandomWord();
  randomWordEl.innerText = randomWord;
  // console.log(randomWordEl.innerText);
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

      if (difficulty === 'easy') {
        time += 4;
      } else if (difficulty === 'medium') {
        time += 2;
      } else if (difficulty === 'hard') {
        time += 1;
      }
    }, 100);

  }
}

const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
  time--;
  timeEl.innerText = `${time}s`;

  if (time === 0) {
    clearInterval(time);
    gameOver()
  }
}

function changeDifficulty(e) {
  if (e.target.value === 'hard') {
    console.log('ok');
    time += 2
    // checkWord()
  }

}

function gameOver() {
  gameOverOverlay.style.display = 'flex';
  gameOverOverlay.innerHTML = `
  <h1>Game Over</h1>
    <p>Your score is ${score}</p>
    <button onclick="location.reload()" class="reload-btn">Reload</button>
  `
  // gameOverOverlay.style.display = 'none';
}

function toggleSettings() {
  difficultyForm.classList.toggle('hide');
}

function changeDifficulty(e) {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
}

// checkWord();

// Event Listeners
textEl.addEventListener('input', checkWord);
settingsBtn.addEventListener('click', toggleSettings);
selectDifficulty.addEventListener('change', changeDifficulty);

