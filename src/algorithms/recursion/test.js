import { fact, fib, collatz } from './index'


describe('Recursive: Factorial', () => {
  test('fact function is defined', () => {
    expect(typeof fact).toEqual('function');
  });

  test('calculates correct fact value for 1', () => {
    expect(fact(1)).toEqual(1);
  });

  test('calculates correct fact value for 2', () => {
    expect(fact(2)).toEqual(2);
  });

  test('calculates correct fact value for 3', () => {
    expect(fact(3)).toEqual(6);
  });

});


describe('Recursive: Fibonnaci', () => {
  test('Fib function is defined', () => {
    expect(typeof fib).toEqual('function');
  });

  test('calculates correct fib value for 1', () => {
    expect(fib(1)).toEqual(1);
  });

  test('calculates correct fib value for 2', () => {
    expect(fib(2)).toEqual(1);
  });

  test('calculates correct fib value for 3', () => {
    expect(fib(3)).toEqual(2);
  });

  test('calculates correct fib value for 4', () => {
    expect(fib(4)).toEqual(3);
  });

  test('calculates correct fib value for 15', () => {
    expect(fib(39)).toEqual(63245986);
  });

});


describe('Recursive: Collatz', () => {
  test('Collatz function is defined', () => {
    expect(typeof collatz).toEqual('function');
  });

  test('calculates correct collatz value for 1', () => {
    expect(collatz(1)).toEqual(0);
  });

  test('calculates correct collatz value for 2', () => {
    expect(collatz(2)).toEqual(1);
  });

  test('calculates correct collatz value for 5', () => {
    expect(collatz(5)).toEqual(5);
  });

  test('calculates correct collatz value for 6', () => {
    expect(collatz(6)).toEqual(8);
  });

  test('calculates correct collatz value for 8', () => {
    expect(collatz(8)).toEqual(3);
  });

  test('calculates correct collatz value for 27', () => {
    expect(collatz(27)).toEqual(111);
  });
});
