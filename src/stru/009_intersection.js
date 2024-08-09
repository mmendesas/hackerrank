const intersection = (a, b) => {
  const setA = new Set(a)
  const result = []

  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])) // -> [2,6])
console.log(intersection([2, 4, 6], [4, 2])) // -> [2,4])
console.log(intersection([4, 2, 1], [1, 2, 4, 6])) // -> [1,2,4]
