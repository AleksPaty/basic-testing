// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases: {a: number | string, b: number, action: string, expected: number | null,}[] = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 3, b: 2, action: Action.Divide, expected: 1.5 },
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: '4', b: 2, action: Action.Exponentiate, expected: null },
  { a: 3, b: 2, action: 'd', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('should test all case', async({a, b, action, expected}) => {
    if(typeof(expected) === 'object') {
      expect( simpleCalculator({a, b, action}) ).toBe(expected)
    } else {
      expect( simpleCalculator({a, b, action}) ).toBeCloseTo(expected)
    }
  })
  // Consider to use Jest table tests API to test all cases above
});
