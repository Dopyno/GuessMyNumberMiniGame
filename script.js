'use strict';

//?   Selectarea si modificarea unui element html

//*   document.querySelector('.class');                           //* selectare elementul html
//*   document.querySelector('.class').textContent;               //* selectare doar textul din elementul html
//*   document.querySelector('.class').textContent = 'textString'; // *string
//*   document.querySelector('.class').textContent = 10;            // *value
//*   document.querySelector('.class').value;
//*   document.querySelector('.class').value = 10;    // *value modificarea valorii

//*   document.getElementById('.idElement').innerHTML;
//*   document.getElementById('#idElement').value = 10;
//*   document.getElementById('idElement').innerHTML;

//!               Challenge Mini Game

//document.querySelector('#number1').textContent = randomElement;
//document.querySelector('#number1').textContent = '?';
//let randomElement = Number.parseInt(Math.random() * 21);

let secretNumber = generateRandomNumber();
let credit = 20;
let highScore = 0;

//?     Check BTN

document.querySelector('#check-btn').addEventListener('click', function () {
  document.querySelector('#credit').textContent = `💯 Credit:` + credit;
  let temp = Number(document.querySelector('#user-input').value);

  if (credit == 0) {
    //credit--;
    document.querySelector('#winner').textContent = `Game Over!`;
    window.location = 'gameOver.html';
    //gameOverFunction();
  } else if (!temp) {
    credit--;
    updateCreditAndInfo(credit, `⛔No number!`);
  } else if (temp < 1 || temp > 20) {
    credit--;
    updateCreditAndInfo(credit, `⛔Not in range!⛔`);
  } else if (temp == secretNumber) {
    credit--;
    updateCreditAndInfo(credit, `🥇*Winner!!!*🏆`);
    highScore += secretNumber;
    winnerUpdate(highScore, secretNumber);
    secretNumber = generateRandomNumber();
    changeColor();
  } else if (temp > secretNumber) {
    credit--;
    updateCreditAndInfo(credit, `To big! 📈`);
  } else {
    credit--;
    updateCreditAndInfo(credit, `To small! 📉`);
  }
});

//?    reset BTN

document.querySelector('#reset-btn').addEventListener('click', function () {
  //? window.location = 'index.html';
  credit = 20;
  secretNumber = generateRandomNumber();
  resetFields();
});

//Functions

function resetFields() {
  document.querySelector('#winner').textContent = '🏁Start playing!';
  document.querySelector('#credit').textContent = '💯 Credit: 20';
  document.querySelector('#highscore').textContent = '🥇 Highscore: 0';
  document.querySelector('#number1').textContent = '?';
  document.querySelector('#user-input').value = '';
  document.querySelector('body').style.backgroundColor = '#00bfff';
}
function changeColor() {
  document.querySelector('body').style.backgroundColor = '#DFFF00';
  document.querySelector('#number1').style.width = '170px';
}
function generateRandomNumber() {
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  return randomNumber;
}
function updateCreditAndInfo(data, message) {
  document.querySelector('#credit').textContent = `💯 Credit:` + data;
  document.querySelector('#winner').textContent = message;
  document.querySelector('body').style.backgroundColor = '#00bfff';
  document.querySelector('#number1').textContent = '?';
}
function winnerUpdate(data, data2) {
  document.querySelector('#highscore').textContent = '🥇 Highscore: ' + data;
  document.querySelector('#number1').textContent = data2;
}

// const gameOverFunction = function{
//     document.querySelector('#winner').textContent = `Game Over!`;
//     window.location = 'gameOver.html';
// }
// function displayUpdate(data, message){
//   document.querySelector(data).textContent = message;
// }
