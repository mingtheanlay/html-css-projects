// Random Picked Color Variable
var colors = generateColor(6);

var pickedColor = pickColor();
// Square Variable
var squares = document.querySelectorAll(".square");
// Displat RGB code to player variable
var displayRGB = document.querySelector("#displayRGB");
displayRGB.textContent = pickedColor.toUpperCase();
var h1 = document.querySelector("h1");

var displayMessage = document.querySelector("#message");
changeColor(colors);

var reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
  colors = generateColor(6);
  pickedColor = pickColor();
});

function changeColor(arr) {
  // Loop through square and add the color and event to all squares
  for (var i = 0; i <= squares.length; i++) {
    // add color to all square
    squares[i].style.backgroundColor = arr[i];
    // add event click to all square
    squares[i].addEventListener("click", colorComparison);
  }
}

// Function to compare user click to picked color by random
function colorComparison() {
  // grab user clicked color
  var clickedColor = this.style.backgroundColor;
  // compare color with pickedColor
  if (clickedColor === pickedColor) {
    displayMessage.textContent = "Correct!";
    h1.style.backgroundColor = pickedColor;
    changeColor(pickedColor);
  } else {
    displayMessage.textContent = "Wrong!";
    this.style.backgroundColor = "#232323";
  }
}

function changeColor(colors) {
  for (var i = 0; i <= squares.length; i++) {
    squares[i].style.backgroundColor = colors;
  }
}

function pickColor() {
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function generateColor(mode) {
  var colorPallet = [];
  if (mode === 6) {
    for (var i = 0; i < 6; i++) {
      colorPallet.push(randomColor());
    }
  }
  return colorPallet;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
