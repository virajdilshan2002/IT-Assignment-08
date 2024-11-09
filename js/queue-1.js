console.log("queue-1.js file is loaded...");
//letters
let letters = ["A", "B", "C", "D", "E", "F"];

//get employees from document
let employees = new Array(6);
for (let i = 0; i < 6; i++) {
  employees[i] = document.getElementById("emp-" + (i + 1));
}

let currentEmp = 0;
let currentLetter = 5;

function startLoop() {
  for (let i = 0; i < employees.length; i++) {
    document.getElementById("emp-" + (currentEmp + 1)).innerHTML =
      '<span class="sign">' + letters[currentLetter] + "</span>";

    console.log("emp - " + (currentEmp + 1) + " and letter - " + currentLetter);
    calculateCurrentLetter();
    calculateCurrentEmp();
  }
  changeLetter();
}

function calculateCurrentLetter() {
  currentLetter = (currentLetter + 1) % letters.length;
}

function calculateCurrentEmp() {
  currentEmp = (currentEmp + 1) % employees.length;
}

function changeLetter() {
  currentLetter = (currentLetter + letters.length - 1) % letters.length;
}

setInterval(startLoop, 1000);
