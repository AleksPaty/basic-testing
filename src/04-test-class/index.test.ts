// Uncomment the code below and write your tests
import { BankAccount, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    let bankAcc = getBankAccount(101)
    expect(bankAcc).toBeInstanceOf(BankAccount)
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    let bankAcc = getBankAccount(101)
    expect(() => bankAcc.withdraw(201)).toThrow(`Insufficient funds: cannot withdraw more than 101`)
  });

  test('should throw error when transferring more than balance', () => {
    let bankAcc = getBankAccount(101)
    let bankAcc2 = getBankAccount(303)
    expect(() => bankAcc.transfer(102, bankAcc2)).toThrow(`Insufficient funds: cannot withdraw more than 101`)
  });

  test('should throw error when transferring to the same account', () => {
    let bankAcc = getBankAccount(101)
    expect(() => bankAcc.transfer(102, bankAcc)).toThrow('Transfer failed')
  });

  test('should deposit money', () => {
    let bankAcc = getBankAccount(101)
    bankAcc.deposit(202)
    expect(bankAcc.getBalance()).toBe(303)
  });

  test('should withdraw money', () => {
    let bankAcc = getBankAccount(101)
    bankAcc.withdraw(51)
    expect(bankAcc.getBalance()).toBe(50)
  });

  test('should transfer money', () => {
    let bankAcc = getBankAccount(101)
    let bankAcc2 = getBankAccount(0)
    bankAcc.transfer(101, bankAcc2)
    expect(bankAcc2.getBalance()).toBe(101)
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    let bankAcc = getBankAccount(101)
    expect(bankAcc.fetchBalance()).not.toBeNull()
  });

  test('should set new balance if fetchBalance returned number', async () => {
    let bankAcc = getBankAccount(101)
    let asyncMoc = jest.fn(() => bankAcc.fetchBalance().then((res) => res))
    console.log(asyncMoc.mock.results)
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
