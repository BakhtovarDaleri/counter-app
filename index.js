let incrementButton = document.querySelector("#incrementButton");
let resetButton = document.querySelector("#resetButton");
let counterText = document.querySelector(".counter");

let counter = 0;

incrementButton.addEventListener("click", function () {
  counter = counter + 1;
  counterText.innerText = counter;
});

resetButton.addEventListener("click", function () {
  counter = 0;
  counterText.innerText = counter;
});
