// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = expect( simpleCalculator({a: 5, b: 1, action: Action.Add}) )
    result.toBeCloseTo(6);
  });

  test('should subtract two numbers', () => {
    const result = expect(simpleCalculator({a: 5, b: 1, action: Action.Subtract}))
    result.toBeCloseTo(4);
  });

  test('should multiply two numbers', () => {
    const result = expect(simpleCalculator({a: 5, b: 1, action: Action.Multiply}))
    result.toBeCloseTo(5);
  });

  test('should divide two numbers', () => {
    const result = expect(simpleCalculator({a: 6, b: 3, action: Action.Divide}))
    result.toBeCloseTo(2);
  });

  test('should exponentiate two numbers', () => {
    const result = expect(simpleCalculator({a: 5, b: 2, action: Action.Exponentiate}))
    result.toBeCloseTo(25);
  });

  test('should return null for invalid action', () => {
    const result = expect(simpleCalculator({a: 5, b: 2, action: []}))
    result.toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = expect(simpleCalculator({a: true, b: '', action: Action.Subtract}))
    result.toBeNull();
  });
});
