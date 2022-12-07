'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const button = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const scoreSpan = document.querySelector('.score');
const message = document.querySelector('.message');
const body = document.querySelector('body');
let score = 20;


button.addEventListener('click', () => {
  // number.textContent = guess;
  const guessValue = Number(guess.value);
  console.log(guessValue);
  // if win
  if (secretNumber === guessValue) {
    number.textContent = secretNumber;
    message.textContent = 'nediünyia!';
    body.style.backgroundColor = 'green';
    // if guess is too low
  } else if (secretNumber > guessValue) {
    if (score > 1) {
      message.textContent = 'too low';
      score--;
      scoreSpan.textContent = score;
    } else {
      scoreSpan.textContent = 0;
      message.textContent = 'you lost :(';
    }
    // if guess is too high
  } else if (secretNumber < guessValue) {
    if (score > 1) {
      message.textContent = 'too high';
      score--;
      scoreSpan.textContent = score;
    } else {
      scoreSpan.textContent = 0;
      message.textContent = 'you lost :(';
    }
  }
})

buttonAgain.addEventListener('click', () => {
  window.location.reload();
  guess.value = "0";
})