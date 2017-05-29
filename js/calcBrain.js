

var calculatorValue, previousNum = "", stringyNum = "";
var numbers = "1234567890.".split("");

function updateDisplay(stringyNum) {
  // console.log(stringyNum);
  $('th#display').replaceWith('<th colspan="4" id="display"><p align="right">' + stringyNum + '</p></th>');
}

function stringIt(stringyNum, buttonPressed) {
  stringyNum += buttonPressed;
  console.log(stringyNum, "<-string it")
  updateDisplay(stringyNum);
}
