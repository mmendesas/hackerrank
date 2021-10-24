// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

//  Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = nums => {
  let countEven = 0;
  let i = 0;

  while (i < nums.length) {
    const len = `${nums[i]}`.length
    if (len % 2 === 0) {
      countEven++;
    }
    i++;
  }
  return countEven
}

console.log(findNumbers([12, 345, 2, 6, 7896])) // 2
console.log(findNumbers([12])) // 1
console.log(findNumbers([1]))  // 0
console.log(findNumbers([]))   // 0
