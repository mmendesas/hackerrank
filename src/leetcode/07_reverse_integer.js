const reverse = x => {
  const arr = []
  const sign = Math.sign(x)
  const bigNum = Math.pow(2, 31)

  let num = Math.abs(x)

  // add each digit to arr from last to first one
  // maintain same order (to use idx as exponent)
  // [1,2,3]
  while (num > 0) {
    if (num < 10) {
      arr.unshift(num)
      break;
    }
    arr.unshift(num % 10)
    num = Math.floor(num / 10)
  }

  // use exponent to get the new value
  // 321
  let sum = 0;
  for (let [exp, base] of arr.entries()) {
    sum += base * Math.pow(10, exp);
  }

  // check restrictions (sign, boundary)
  const res = sum * sign;
  if (-bigNum <= res && res <= bigNum) return res;

  return 0;
}

console.log('reverse', reverse2(123)) // 321
console.log('reverse', reverse(-123)) // -321

console.log('reverse', reverse(120)) // 21
console.log('reverse', reverse(1200)) // 21
console.log('reverse', reverse(1534236469)) // 0

