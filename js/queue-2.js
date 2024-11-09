console.log("queue-2.js file is loaded...");

//get boxes from document
let boxes = new Array(6);
for (let i = 0; i < 6; i++) {
  boxes[i] = document.getElementById("box-" + (i + 1));
}

//colors
let lightPink = "rgb(255, 151, 253)";
let darkPink = "rgb(211, 0, 187)";
let red = "red";
let green = "green";
let blue = "blue";
let yellow = "yellow";

let colors = [lightPink, darkPink, red, green, blue, yellow];

//default
let currentBox = 0;
let currentColor = 5;

function changeColor() {
  for (let index = 0; index < boxes.length; index++) {
    boxes[index].style.backgroundColor = colors[currentColor];
    calColorIndex();
  }
  changeColorIndex();
}

function calColorIndex() {
  currentColor = (currentColor + 1) % colors.length;
}

function calBoxIndex() {
  currentBox = (currentBox + 1) % boxes.length;
}

function changeColorIndex() {
  currentColor = (currentColor + colors.length - 1) % colors.length;
}

setInterval(changeColor, 1000);
