const fib = (num, memo = {}) => {
  if (num in memo) return memo[num]

  if (num <= 2) return 1
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
  return memo[num]
}

// 1 1 2 3 5 8 13
console.log(fib(3))
console.log(fib(5))
console.log(fib(8))
console.log(fib(50))

