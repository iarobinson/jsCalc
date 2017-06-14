
var stringyNum = '', previousNum = '', operand = '';
var numbers = '1234567890'.split('');
var operandSelected = ['add', 'subtract', 'multiply', 'divide'];

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
  } else if (isOperand(buttonPressed)) {
    if (previousNum === '') {
      prepCalc(buttonPressed);
      updateDisplay(previousNum);
    } else {
      previousNum = runCalc();
      stringyNum = '';
      operand = buttonPressed;
      updateDisplay(previousNum);
    }
  } else if (buttonPressed === 'equals') {
    stringyNum = runCalc();
    updateDisplay(stringyNum);
    previousNum = stringyNum;
    stringyNum = '';
    operand = '';

  } else {
    updateDisplay(stringyNum);
  }

  console.log(previousNum, "<-previousNum");
  console.log(operand, "<-operand");
  console.log(stringyNum, "<-stringyNum");
  console.log("--------");
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
  } else {
    return previousNum;
  }
}

function prepCalc(op) {
  previousNum = stringyNum;
  stringyNum = '';
  operand = op;
}

function isOperand(buttonPressed) {
  return operandSelected.indexOf(buttonPressed) !== -1
}

function isNum(buttonPressed) {
  return numbers.indexOf(buttonPressed) > -1
}

function decimalOK() {
  return stringyNum.indexOf('.') === -1
}
