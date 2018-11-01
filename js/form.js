// sliders values output

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

// upload files list

var control = document.getElementById('upload-files-input');
control.addEventListener("change", function(evt) {
  var i = 0,
      files = control.files,
      len = files.length;

  for (; i < len; i++) {
      console.log("Filename: " + files[i].name);
      var li = document.createElement('li');
			li.className = 'upload-list-element';
			li.innerHTML = files[i].name;
			var parentElem = document.querySelector('.file-upload-list');
			parentElem.appendChild(li);

      console.log("Type: " + files[i].type);

      console.log("Size: " + files[i].size + " bytes");
  }
 
}, false);

// display label for focused input

var clientName = document.getElementById('client-name');
var clientNameLabel = document.getElementById('client-name-label');

clientName.onfocus = function() {
	clientNameLabel.classList.add('label-show');
};

clientName.onblur = function() {
	clientNameLabel.classList.remove('label-show');
};