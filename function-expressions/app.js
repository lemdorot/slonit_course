function calculate(a, b, operationFunction) {
  return operationFunction(a, b);
}

const operationMultiplication = function (a, b) {
  return `a * b = ${a * b}`;
};

const operationDivision = function (a, b) {
  return `a / b = ${a / b}!`;
};

const operationAddition = function (a, b) {
  return `a + b = ${a + b}`;
};

const operationSubtraction = function (a, b) {
  return `a - b = ${a - b}`;
};

const operations = {
  multiplication: operationMultiplication,
  division: operationDivision,
  addition: operationAddition,
  subtraction: operationSubtraction,
};

let selectedOperation = "multiplication";
console.log(calculate(3, 4, operations[selectedOperation]));
selectedOperation = "division";
console.log(calculate(3, 4, operations[selectedOperation]));
selectedOperation = "addition";
console.log(calculate(3, 4, operations[selectedOperation]));
selectedOperation = "subtraction";
console.log(calculate(3, 4, operations[selectedOperation]));