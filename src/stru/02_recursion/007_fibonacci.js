const fibonacci = n => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(8))
