
var stringyNum = '', previousNum = '', operand = '';
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
    previousNum = '';
    operand = '';
    updateDisplay(stringyNum);
  } else if (buttonPressed === '.' && decimalOK()) {
    stringyNum += buttonPressed;
    updateDisplay(stringyNum);
  } else if (isOperand(buttonPressed) && previousNum === '') {
    updateDisplay(stringyNum);
    prepCalc(buttonPressed);
  } else if (buttonPressed === 'equals') {
    stringyNum = runCalc();
    previousNum = '';
    operand = '';
    updateDisplay(stringyNum);
  } else {
    updateDisplay(stringyNum);
  }
}

function runCalc() {
  var result;
  if (operand === 'add') {
    result = parseFloat(previousNum) + parseFloat(stringyNum);
    return result.toString();
  } else if (operand === 'subtract') {
    result = parseFloat(previousNum) - parseFloat(stringyNum);
    return result.toString();
  } else if (operand === 'multiply') {
    result = parseFloat(previousNum) * parseFloat(stringyNum);
    return result.toString();
  } else if (operand === 'divide') {
    result = parseFloat(previousNum) / parseFloat(stringyNum);
    return result.toString();
  }
}

function prepCalc(op) {
  previousNum = stringyNum;
  operand = op;
  stringyNum = '';
  updateDisplay(stringyNum);
}

function isOperand(buttonPressed) {
  if (operandSelected.indexOf(buttonPressed) === -1) {
    return false;
  }
  return true;
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
