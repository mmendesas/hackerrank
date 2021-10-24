// https://leetcode.com/problems/squares-of-a-sorted-array/

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

const sortedSquares = nums => {
  const arr = Array(nums.length).fill(0)
  let last = arr.length - 1
  let start = 0;
  let end = last;

  while (last >= 0) {
    const a = nums[start] * nums[start]
    const b = nums[end] * nums[end]

    if (a >= b) start++;
    else if (b > a) end--;

    arr[last] = Math.max(a, b)
    last--;
  }

  return arr;
}

// solution 2 using arr.sort
const sortedSquares2 = function (nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i])
  }
  result.sort((a, b) => a - b)
  return result
};

console.log(sortedSquares([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])) // [4,9,9,49,121]
