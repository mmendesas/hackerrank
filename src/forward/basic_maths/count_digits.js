// count digits
// given an integer, count the number of digits in it

// brute force
const countDigits1 = (num) => {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};

// optimized
// The expression Math.floor(Math.log10(n) + 1)
// calculates the number of digits in 'n'
// and rounds it down to the nearest whole number.

// Adding 1 to the result accounts
// for the case when 'n' is a power of 10,
// ensuring that the count is correct.
const countDigits = (num) => {
  if (!num) return 0;
  return Math.floor(Math.log10(num)) + 1;
};

console.log(countDigits(1234)); // 4
console.log(countDigits(123456)); // 6
console.log(countDigits(0)); // 0
console.log(countDigits(1)); // 1
console.log(countDigits()); // 0
