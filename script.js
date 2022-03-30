const stringLength = (string) => {
  try {
    if (string.length < 1) throw "too small"
    if (string.length > 10) throw "too big"
  } catch (error) {
    return error
  }

  return string.length
};
const reverseString = (string) => string.split('').reverse().join('');
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

class Calculator {
  add = (int1, int2) => int1 + int2;
  subtract = (int1, int2) => int1 - int2;
  divide = (int1, int2) => int1 / int2;
  multiply = (int1, int2) => int1 * int2;
};

// console.log(stringLength("helloaaaaaaaaaaa"));
// console.log(reverseString("hello"));
// console.log(capitalize("hello"));

let calculator = new Calculator();
// console.log(calculator.add(1, 1))
// console.log(calculator.subtract(3, 1))
// console.log(calculator.divide(6, 2))
// console.log(calculator.multiply(2, 3))

module.exports = { stringLength, reverseString, capitalize, calculator}