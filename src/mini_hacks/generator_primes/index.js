// Generator Primes
// Given an integer n, use Javascript generators to generate all prime numbers less than n.

// function generator
function* getPrimes(num) {
  for (let i = 0; i < num; i += 1) {
    if (isPrime(i)) yield i;
  }
}

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default getPrimes;
