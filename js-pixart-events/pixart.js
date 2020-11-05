// Cached DOM Nodes
const form = document.getElementById("form");
const input = document.getElementById("color-field");
const brush = document.getElementById("brush");
const artboard = document.getElementById("artboard");
const squares = document.getElementsByClassName("square");

let brushColor = "";

// When you click the "Set Color" button , change the color of the
// "brush" box to the value specfied by your input value
form.addEventListener("submit", (e) => {
  e.preventDefault();
  brushColor = input.value;
  brush.style.backgroundColor = brushColor;
  input.value = "";
});

// Create our ~8000 div blocks that will become our pixels/canvas!
// Reconfigure to add the event listener when you make each pixel.
for (let i = 0; i <= 8000; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("square");
  artboard.appendChild(pixel);
  pixel.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = brushColor;
  });
}

// when you mouseover each div, have it change the background color of
// that div to the color specified by your input value
// artboard.addEventListener("mouseover", (e) => {
//   e.target.style.backgroundColor = brushColor;
// });
// //
// //
//
//
//
