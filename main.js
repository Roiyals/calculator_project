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
    displayStuff(+button.textContent);
    updateCalc(+button.textContent);
  });
});

const operatorButtons = document.querySelectorAll(
  ".operators-and-others button"
);
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      clearDisplay(button.textContent);
    } else {
      updateCalc(button.textContent);
    }
  });
});

let calc = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  equalTo: "",
};

function updateCalc(button) {
  function number() {
    let nodeList = document.querySelectorAll("div p");
    let numArr = [...nodeList].map((p) => +p.textContent);

    return numArr.join("");
  }

  if (calc.firstNumber && calc.operator) {
    calc.secondNumber = number();
  } else if (typeof button !== "number" && calc.firstNumber) {
    calc.operator = button;
  } else if (typeof button === "number" && calc.secondNumber === "") {
    calc.firstNumber = number();
  }

  console.log(calc);
}

function displayStuff(button) {
  const p = document.createElement("p");
  p.style.display = "inline-block";
  p.textContent = button;
  display.appendChild(p);
}

function clearDisplay(button) {
  // Full reset
  if (button === "C") {
    display.textContent = "";
    calc.firstNumber = "";
    calc.secondNumber = "";
    calc.operator = "";
    return;
  }

  // Clears display everytime seconNumber is updated
  display.textContent = "";
}
