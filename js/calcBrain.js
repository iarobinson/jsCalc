
var stringyNum = '', calculatorValue, previousNum = '';
var numbers = "1234567890.".split("");

function updateDisplay(stringyNum) {
  $('th#display').replaceWith('<th colspan="4" id="display"><p align="right">' + stringyNum.substring(0,20) + '</p></th>');
}

function doSomeMath(numString, op) {
  if (previousNum === '') {
    previousNum = numString;
  } else {
    if (op === "add") {
      var result = add(previousNum, stringyNum);
      return updateDisplay(result);
    }
  }
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
