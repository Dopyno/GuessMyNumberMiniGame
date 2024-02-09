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

document.querySelector('#check-button').addEventListener('click', function () {
  let randomElement = Number.parseInt(Math.random() * 21);
  let temp = Number(document.querySelector('#user-input').value);
  //temp = Number(temp);
  if (typeof temp != 'number') {
    document.querySelector(
      '#error-message'
    ).textContent = `*****Sorry, please use numbers only!!!*****`;
  } else if (temp <= 1 || temp >= 20) {
    document.querySelector(
      '#error-message'
    ).textContent = `***Sorry, your number is not in range between 1 - 20, please try again!***`;
  } else if (temp == randomElement) {
    document.querySelector(
      '#winner'
    ).textContent = `🎉 Correct Number! \n*🏆🏆🎖🥇*Winner!!!*💎🥇🏆*`;
  } else if (temp > randomElement) {
    document.querySelector(
      '#error-message'
    ).textContent = `*****Sorry this number is to big, please try again!*****`;
  } else {
    document.querySelector(
      '#error-message'
    ).textContent = `*****Sorry this number is to small, please try again!*****`;
  }
  //console.log(temp);
});
