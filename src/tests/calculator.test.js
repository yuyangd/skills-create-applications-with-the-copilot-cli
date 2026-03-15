const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('adds positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('adds zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('adds two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('adds decimal numbers', () => {
      expect(add(2.5, 1.5)).toBe(4);
    });

    test('10 + 3 from example', () => {
      expect(add(10, 3)).toBe(13);
    });
  });

  describe('Subtraction', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts negative from positive', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('subtracts positive from negative', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('subtracts zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('subtracts a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('subtracts decimal numbers', () => {
      expect(subtract(5.5, 1.5)).toBe(4);
    });

    test('10 - 4 from example', () => {
      expect(subtract(10, 4)).toBe(6);
    });
  });

  describe('Multiplication', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('multiplies two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('multiplies positive by negative', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies by one', () => {
      expect(multiply(5, 1)).toBe(5);
    });

    test('multiplies decimal numbers', () => {
      expect(multiply(2.5, 2)).toBe(5);
    });

    test('45 * 2 from example', () => {
      expect(multiply(45, 2)).toBe(90);
    });
  });

  describe('Division', () => {
    test('divides two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('divides to get decimal result', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('divides negative by positive', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('divides positive by negative', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('divides two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('divides by one', () => {
      expect(divide(5, 1)).toBe(5);
    });

    test('divides zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('divides decimal numbers', () => {
      expect(divide(10.5, 2)).toBe(5.25);
    });

    test('throws error for division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('20 / 5 from example', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Calculate Function', () => {
    test('calculate with addition operator', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('calculate with subtraction operator', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('calculate with multiplication operator', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('calculate with division operator', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('calculate with modulo operator', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });

    test('calculate with power operator', () => {
      expect(calculate(2, '**', 8)).toBe(256);
    });

    test('throws error for unsupported operator', () => {
      expect(() => calculate(10, '&', 3)).toThrow(`Unsupported operator '&'`);
    });

    test('throws error when dividing by zero through calculate', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Modulo', () => {
    test('modulo with positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('modulo with 5 % 2 from example', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('modulo with two negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('modulo resulting in zero', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('modulo with decimal numbers', () => {
      expect(modulo(7.5, 2)).toBeCloseTo(1.5, 5);
    });

    test('modulo with small numbers', () => {
      expect(modulo(1, 0.5)).toBeCloseTo(0, 5);
    });

    test('modulo with large numbers', () => {
      expect(modulo(1000, 7)).toBe(6);
    });

    test('throws error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('throws error for modulo by zero with negative dividend', () => {
      expect(() => modulo(-10, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('Power', () => {
    test('power with positive exponent', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('power with 2 ^ 3 from example', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('power with zero base and positive exponent', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('power with one base any exponent', () => {
      expect(power(1, 100)).toBe(1);
    });

    test('power with negative exponent', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('power with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('power with negative base and even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('power with negative base and odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('power with large exponent', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('power with very small base and exponent', () => {
      expect(power(0.5, 2)).toBe(0.25);
    });

    test('power with negative exponent decimal result', () => {
      expect(power(10, -2)).toBe(0.01);
    });
  });

  describe('Square Root', () => {
    test('square root of perfect square', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('square root of √16 from example', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('square root of non-perfect square', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    test('square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('square root of decimal number', () => {
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('square root of large perfect square', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('square root of small decimal', () => {
      expect(squareRoot(0.04)).toBe(0.2);
    });

    test('square root of pi approximation', () => {
      expect(squareRoot(3.14159)).toBeCloseTo(1.772, 2);
    });

    test('throws error for square root of negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of negative numbers is not allowed');
    });

    test('throws error for square root of large negative number', () => {
      expect(() => squareRoot(-100)).toThrow('Square root of negative numbers is not allowed');
    });

    test('throws error for square root of negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Square root of negative numbers is not allowed');
    });

    test('square root of very small positive number', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('square root of 9', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('square root of 25', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('square root of 100', () => {
      expect(squareRoot(100)).toBe(10);
    });
  });

  describe('Example Operations from Image', () => {
    test('2 + 3 = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('10 - 4 = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('45 * 2 = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('20 / 5 = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });
  });

  describe('Edge Cases', () => {
    test('handles very large numbers', () => {
      expect(add(1e10, 1e10)).toBe(2e10);
    });

    test('handles very small numbers', () => {
      expect(multiply(0.0001, 0.0001)).toBeCloseTo(0.00000001);
    });

    test('handles negative zero', () => {
      expect(add(-0, 0)).toBe(0);
    });

    test('division by zero edge case', () => {
      expect(() => divide(0.0001, 0)).toThrow('Division by zero is not allowed');
    });
  });
});
