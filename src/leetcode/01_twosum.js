// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// input: [2, 7, 11, 15]
// target: 9
// output: [0,1]

const twoSum = (target, arr) => {
  if (arr.length < 2) return []
  const hash = {}
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const remain = target - num;
    if (remain in hash) return [hash[remain], i]
    hash[num] = i
  }
}

// solution: store remainder of each num
// if it is inside hash, return indexes

// n = arr.length
// time: O(n) - pass through arr once

console.log(twoSum(9, [2, 7, 11, 15])) // [0,1]
console.log(twoSum(6, [3, 2, 4])) // [1,2]
console.log(twoSum(6, [3, 3]))
console.log(twoSum(6, [])) // []
