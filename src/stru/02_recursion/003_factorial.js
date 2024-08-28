const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1)
}

console.log(factorial(13)) // 6227020800
console.log(factorial(0)) // 1
console.log(factorial(3)) // 6
