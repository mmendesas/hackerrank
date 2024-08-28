const sumOfLengths = (arr) => {
  if (arr.length === 0) return 0;

  const len = arr[0].length
  return len + sumOfLengths(arr.slice(1))
}

console.log(sumOfLengths(['goat', 'cat']))
