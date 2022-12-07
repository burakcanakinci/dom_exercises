'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const button = document.querySelector('.check');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const scoreSpan = document.querySelector('.score');
const message = document.querySelector('.message');
const body = document.querySelector('body');
let score = 20;
number.textContent = secretNumber;

button.addEventListener('click', () => {
  // number.textContent = guess;
  const guessValue = Number(guess.value);
  console.log(guessValue)
  if (secretNumber === guessValue) {
    message.textContent = 'nediünyia!';
    body.style.backgroundColor = 'green';
  } else if ( secretNumber > guessValue) {
    message.textContent = 'too low';
    score--;
    scoreSpan.textContent = score;
  } else if ( secretNumber < guessValue) {
    message.textContent = 'too high';
    score--;
    scoreSpan.textContent = score;
  }
})