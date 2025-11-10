"use strict";

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {}

const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".numbers-section button");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayStuff(button.textContent);
  });
});

const operatorButtons = document.querySelectorAll(
  ".operators-and-others button"
);
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayStuff(button.textContent);
  });
});

function displayStuff(button) {
  if (button === "C") {
    display.textContent = "";
    return;
  }

  const p = document.createElement("p");
  p.textContent = button;
  display.appendChild(p);
}
