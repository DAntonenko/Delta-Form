/* var form = document.getElementById('request');

var formHeader = form.querySelector("h1");
var formHeaderAfter = form.querySelector("h1::after");

form.classList.add('dimensionally-hidden');

formHeader.classList.add('dimensionally-discovered');
console.log(formHeaderAfter); */

function budgetOutput() {
  var x = document.getElementById('budget-input').value;
  if (x == 0) {
  	var output = 'до 1 млн ₽';
  } else if (x == 5) {
  	var output = '1-5 млн ₽';
  } else {
  	var output = '> 5 млн ₽';
  };
  document.getElementById('budget-output').innerHTML = output;
};

function deadlineOutput() {
  var x = document.getElementById('deadline-input').value;
  if (x == 1) {
  	var mon = ' месяц';
  } else if (x > 1 && x < 5) {
  	var mon = ' месяца';
  } else {
  	var mon = ' месяцев';
  };
  document.getElementById('deadline-output').innerHTML = x;
  document.getElementById('months').innerHTML = mon;
};
