const countdown = (n) => {
  if (n === 0) return
  console.log('entering', n)
  countdown(n - 1)
  console.log('return from', n)
}

countdown(2)
