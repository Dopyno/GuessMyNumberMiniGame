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
  let temp = document.getElementById('user-input').value;
  if (typeof temp !== 'number') {
  }
});
