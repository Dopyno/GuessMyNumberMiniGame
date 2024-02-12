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

//let randomElement = Number.parseInt(Math.random() * 21);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let credit = 20;
let a = 0;
//document.querySelector('#number1').textContent = randomElement;
//document.querySelector('#number1').textContent = '?';

document.querySelector('#check-btn').addEventListener('click', function () {
  document.querySelector('#credit').textContent = `💯 Credit:` + credit;
  let temp = Number(document.querySelector('#user-input').value);

  if (credit == 0) {
    console.log('Game over!!!');
    //window.open('gameOver.html');
    document.querySelector('#winner').textContent = `Game Over!`;

    window.location = 'gameOver.html';
  } else if (!temp) {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit:` + credit;
    document.querySelector('#winner').textContent = `⛔No number!`;
  } else if (temp < 1 || temp > 20) {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit:` + credit;
    document.querySelector('#winner').textContent = `⛔Not in range!⛔`;
  } else if (temp == secretNumber) {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit: ` + credit;
    document.querySelector('#winner').textContent = `🥇*Winner!!!*🏆`;
    a += secretNumber;
    document.querySelector('#highscore').textContent = '🥇 Highscore: ' + a;
    document.querySelector('#number1').textContent = secretNumber;
    changeColor(yellow);
  } else if (temp > secretNumber) {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit: ` + credit;
    document.querySelector('#winner').textContent = `To big! 📈`;
  } else {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit: ` + credit;
    document.querySelector('#winner').textContent = `To small! 📉`;
  }
});
function changeColor(data) {
  document.body.style.backgroundColor = 'data';
}
