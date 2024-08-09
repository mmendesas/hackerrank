// brute force
// time: O(n2)
// space: O(1)
const pairSum2 = (arr = [], target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
}

// time: O(n)
// space: O(n)
const pairSum = (arr = [], target) => {
  const map = {}

  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i]
    const diff = target - num

    if (diff in map) {
      return [map[diff], i]
    }
    map[num] = i
  }
}

console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]

const numbers = [];
for (let i = 0; i <= 30000; i += 1) {
  numbers.push(i);
}
console.log(pairSum(numbers, 59999)); // -> [ 29999, 30000 ]
