// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';


describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(resolveValue('correct value')).resolves.toBe('correct value')
  });
});

describe('throwError', () => {
  test('should throw error with provided message', async() => {
    await expect(Promise.reject(() => throwError('I broke down'))).rejects.toThrow('I broke down')
  });

  test('should throw error with default message if message is not provided', async() => {
    await expect(Promise.reject(throwError)).rejects.toThrow('Oops!')
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(Promise.reject(() => throwCustomError())).rejects.toThrow(MyAwesomeError)
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(() => rejectCustomError()).rejects.toThrow()
  });
});
