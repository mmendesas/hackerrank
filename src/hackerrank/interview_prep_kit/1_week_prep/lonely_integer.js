function lonelyInteger(arr) {
  const numbers = {}
  arr.forEach(item => {
    numbers[item] = numbers[item] + 1 || 1
  })

  const unique = Object.keys(numbers).find(i => numbers[i] === 1)
  return unique
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1])) // 4
console.log(lonelyInteger([1, 1, 2])) // 2
console.log(lonelyInteger([0, 0, 1, 2, 1])) // 2
