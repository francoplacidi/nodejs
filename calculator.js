'use strict'

var params = process.argv.slice(2);

var number1 = parseFloat(params[1]);
var number2 = parseFloat(params[2]);

//console.log(number1);
//console.log(number2);

var template = `
  The sum is: ${number1 + number2}
  The subtraction is: ${number1 - number2}
  The multiplication is: ${number1 * number2}
  The division is: ${number1 / number2}
`;

console.log(template);

console.log("Hello world with nodejs");
