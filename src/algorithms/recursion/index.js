// factorial
export const fact = n => {
  // base case
  if (n == 1)
    return 1;
  else
    // recursive case
    return n * fact(n - 1);
}

// fibonacci
export const fib = n => {
  if (n < 2)
    return n;
  else
    return fib(n - 1) + fib(n - 2);
}

// collatz
export const collatz = n => {

  // base case
  if (n == 1)
    return 0;
  // even numbers
  else if (n % 2 == 0)
    return 1 + collatz(n / 2);
  // odd numbers
  else
    return 1 + collatz((3 * n) + 1);
}


