//

var calculatorValue, stringyNum = "", previousNum = "";

function updateDisplay(num) {
  // console.log(num, " <- num");
  // if (num === 'add') {
  //   previousNum =
  // }
  $('th#display').replaceWith('<th colspan="4" id="display"><p align="right">' + stringyNum + '</p></th>');
}
