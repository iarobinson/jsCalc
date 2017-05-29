
var stringyNum = '', calculatorValue, previousNum = "";
var numbers = "1234567890.".split("");

function updateDisplay(stringyNum) {
  $('th#display').replaceWith('<th colspan="4" id="display"><p align="right">' + stringyNum + '</p></th>');
}

function stringIt(stringyNum, buttonPressed) {
  // console.log("stringingIt");
  stringyNum += buttonPressed;
  updateDisplay(stringyNum);
}

function add(previousNum, stringyNum) {
  return parseFloat(previousNum) + parseFloat(stringyNum)
}

function subtract(previousNum, stringyNum) {
  return parseFloat(previousNum) - parseFloat(stringyNum)
}

function divide(previousNum, stringyNum) {
  return parseFloat(previousNum) / parseFloat(stringyNum)
}

function multiply(previousNum, stringyNum) {
  return parseFloat(previousNum) * parseFloat(stringyNum)
}
