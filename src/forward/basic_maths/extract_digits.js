// extract digits from a number

const extractDigits = (num) => {
  const result = [];
  while (num > 0) {
    const digit = num % 10;
    result.unshift(digit);
    num = Math.floor(num / 10);
  }
  return result;
};

console.log(extractDigits(1234)); // [1,2,3,4]
console.log(extractDigits(123456)); // [1,2,3,4,5,6]
console.log(extractDigits(0)); // []
console.log(extractDigits(1)); // [1]
