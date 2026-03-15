#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (sqrt)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

// Addition: add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Subtraction: subtract num2 from num1
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiplication: multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Division: divide num1 by num2 with error handling for division by zero
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return num1 / num2;
}

// Modulo: returns the remainder of num1 divided by num2
function modulo(num1, num2) {
  if (num2 === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return num1 % num2;
}

// Power: returns num1 raised to the power of num2
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of num with error handling for negative numbers
function squareRoot(num) {
  if (num < 0) {
    throw new Error('Square root of negative numbers is not allowed');
  }
  return Math.sqrt(num);
}

// Perform calculation based on operator
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulo(num1, num2);
    case '**':
      return power(num1, num2);
    default:
      throw new Error(`Unsupported operator '${operator}'`);
  }
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  // Validate input arguments
  if (args.length !== 3) {
    console.error('Error: Invalid number of arguments');
    console.error('Usage: calculator.js <number1> <operator> <number2>');
    console.error('Supported operators: +, -, *, /, %, **');
    console.error('Special operator: sqrt <number>');
    process.exit(1);
  }

  const [num1Str, operator, num2Str] = args;

  // Parse numbers
  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  // Validate parsed numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
