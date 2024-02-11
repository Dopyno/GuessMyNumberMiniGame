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
let randomElement = Math.trunc(Math.random() * 20) + 1;
let credit = 20;
let a = 0;
//document.querySelector('#number1').textContent = randomElement;
//document.querySelector('#number1').textContent = '?';

document.querySelector('#check-btn').addEventListener('click', function () {
  document.querySelector('#credit').textContent = `💯 Credit:` + credit;
  let temp = Number(document.querySelector('#user-input').value);

  if (credit == 0) {
    console.log('Game over!!!');
  } else if (temp < 1 || temp > 20 || !temp) {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit:` + credit;
    document.querySelector('#winner').textContent = `⛔Not in range!⛔`;
  } else if (temp == randomElement) {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit: ` + credit;
    document.querySelector('#winner').textContent = `🥇*Winner!!!*🏆`;
    a += randomElement;
    document.querySelector('#highscore').textContent = '🥇 Highscore: ' + a;
    document.querySelector('#number1').textContent = randomElement;
  } else if (temp > randomElement) {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit: ` + credit;
    document.querySelector('#winner').textContent = `To big! 📈`;
  } else {
    credit--;
    document.querySelector('#credit').textContent = `💯 Credit: ` + credit;
    document.querySelector('#winner').textContent = `To small! 📉`;
  }
});

// function clearText() {
//   document.getElementById('#left-section').reset();
// }

