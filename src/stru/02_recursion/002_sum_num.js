// first version
const sumNumbersRecursive1 = (nums) => {
  if (!nums.length) return 0;

  const last = Number(nums.slice(-1));
  const arr = nums.slice(0, nums.length - 1);

  return last + sumNumbersRecursive(arr);
}

// suggested version
const sumNumbersRecursive = (nums) => {
  if (nums.length === 0) return 0;

  return nums[0] + sumNumbersRecursive(nums.slice(1))
}


console.log(sumNumbersRecursive([1, 2, 2]))
