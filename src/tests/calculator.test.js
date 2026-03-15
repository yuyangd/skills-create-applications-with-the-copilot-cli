const { add, subtract, multiply, divide, calculate } = require('../calculator');

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

    test('throws error for unsupported operator', () => {
      expect(() => calculate(10, '%', 3)).toThrow(`Unsupported operator '%'`);
    });

    test('throws error when dividing by zero through calculate', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Division by zero is not allowed');
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
