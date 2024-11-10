console.log("knight-rider.js file is loaded...");

// Get boxes from document
let boxes = [];
for (let i = 0; i < 5; i++) {
  boxes[i] = document.getElementById("box-" + (i + 1));
}

// Define colors with a gradient effect from light to dark red
const colors = [
  "rgb(255, 159, 159)",
  "rgb(255, 98, 98)",
  "rgb(255, 63, 63)",
  "rgb(255, 39, 39)",
  "red",
];

let intervalId = null;

// Variables for animation
let position = 0;
let direction = 1; // 1 for forward, -1 for backward

function startKnightRider() {
  // Reset all boxes to white before each update
  for (let j = 0; j < boxes.length; j++) {
    boxes[j].style.backgroundColor = "white";
  }

  // Set colors for the current stage
  for (let i = 0; i < colors.length && position - i >= 0; i++) {
    boxes[position - i].style.backgroundColor = colors[colors.length - 1 - i];
  }

  // Update position
  position += direction;

  // Reverse direction at the ends
  if (position >= boxes.length - 1 || position <= 0) {
    direction *= -1;
  }
}

$("#btnStart").on("click", function () {
  clearInterval(intervalId);
  intervalId = setInterval(startKnightRider, 100);
});

$("#btnStop").on("click", function () {
  clearInterval(intervalId);
});
