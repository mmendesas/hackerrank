// https://leetcode.com/problems/max-consecutive-ones/

// Given a binary array nums, return the maximum
// number of consecutive 1's in the array.

const findMaxConsecutivesOnes = nums => {
  let max = 0;
  let i = 0;

  while (i < nums.length) {
    let countOnes = 0;

    while (i < nums.length && nums[i] == 1) {
      countOnes++;
      i++
    }
    max = Math.max(countOnes, max)
    i++
  }
  return max;
}

console.log(findMaxConsecutivesOnes([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutivesOnes([1, 0, 1, 1, 0, 1])) // 2
console.log(findMaxConsecutivesOnes([1])) // 1
console.log(findMaxConsecutivesOnes([0])) // 0
console.log(findMaxConsecutivesOnes([]))  // 0
