
var stringyNum = '', previousNum = '';
var numbers = "1234567890".split("");
var operandSelected = ['add', 'subtract', 'multiply', 'divide', 'equals'];

function updateDisplay(stringyNum) {
  $('th#display').replaceWith('<th colspan="4" id="display"><p align="right">' + stringyNum.substring(0, 10) + '</p></th>');
}

function runTheNumbers(buttonPressed) {
  if (isNum(buttonPressed)) {
    stringyNum += buttonPressed;
    updateDisplay(stringyNum);
  } else if (buttonPressed === 'clear') {
    stringyNum = '';
    updateDisplay(stringyNum);
  } else if (decimalOK()) {
    stringyNum += buttonPressed;
    updateDisplay(stringyNum);
  } else if (isOperand(buttonPressed)) {
    console.log("Do some math");
  } else {
    console.log("nothing should be done")
  }
}

function isNum(buttonPressed) {
  return numbers.indexOf(buttonPressed) > -1
}

function decimalOK() {
  if (stringyNum.indexOf('.') === -1) {
    return true;
  }
  return false;
}

function isOperand(buttonPressed) {
  if (operandSelected.indexOf(buttonPressed) === -1) {
    return false;
  }
  return true;
}

function stringIt(stringyNum, buttonPressed) {
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
