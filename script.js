'use strict';
const button = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const scoreSpan = document.querySelector('.score');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const highScoreSpan = document.querySelector('.highscore')
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

button.addEventListener('click', () => {
  // number.textContent = guess;
  const guessValue = Number(guess.value);
  console.log(guessValue);
  // if win
  if (secretNumber === guessValue) {
    number.textContent = secretNumber;
    message.textContent = 'nediünyia!';
    body.style.backgroundColor = 'green';
    
    if (score > highScore) {
      highScore = score;
      highScoreSpan.textContent = highScore;
    }
    // if guess is too low
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      message.textContent = guessValue > secretNumber ? 'too high' : 'too low';
      score--;
      scoreSpan.textContent = score;
    } else {
      scoreSpan.textContent = 0;
      message.textContent = 'you lost :(';
    }
  }
})

buttonAgain.addEventListener('click', () => { 
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoreSpan.textContent = score;
  number.textContent = '?';
  guess.value = "0";
  body.style.backgroundColor = '#222';
})