// 

var calculatorValue, currentNum = "", previousNum = "";

function updateDisplay(num) {
  $('th#display').replaceWith('<th colspan="4" id="display"><p align="right">' + currentNum + '</p></th>');
}
