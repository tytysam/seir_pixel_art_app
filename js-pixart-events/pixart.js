// Cached DOM Nodes
const button = document.getElementById("set-color");
const form = document.getElementById("form");
const input = document.getElementById("color-field");
const brush = document.getElementById("brush");
const pixels = document.getElementsByClassName("square");

// When you click the "Set Color" button , change the color of the
// "brush" box to the value specfied by your input value
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userInput = input.value;
  brush.style.backgroundColor = userInput;
  input.value = "";
});

// when user submits the form, we will save the value of the string
// use this value to change the background color of the main square
// also change the brush color

// when you mouseover each div, have it change the background color of
// that div to the color specified by your input value

//

//

//

//
//
//
//
//
//
//
//
//
//
//
