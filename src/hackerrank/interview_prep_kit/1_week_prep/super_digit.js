function superDigit(n, k = 1) {
  const sum = n.split('')
    .reduce((acc, c) => acc + Number(c), 0) * k

  if (sum > 10) {
    return superDigit(String(sum))
  }
  return sum
}

function superDigitd(n, k) {
  // Write your code here
  const sum = String(n).split('').reduce((sum, currentNumber) => sum + Number(currentNumber), 0) * k;
  if (sum <= 9) return sum;
  else return superDigit(sum, 1);
}

console.log(superDigit('9875', 4)) // 8
console.log(superDigit('9875', 1)) // 2
