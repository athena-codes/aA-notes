// ES6 IMPORT/EXPORT NOTES 

// Syntax to import a single module
export default function add (num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
   return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

let randomNum = 123

// Syntax to export multiple modules from a file
export {
  subtract,
  multiply,
  randomNum
}
