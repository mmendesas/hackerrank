// container with most water
// https://leetcode.com/problems/container-with-most-water/

const maxArea = (height) => {
  let i = 0;
  let j = height.length - 1;
  let max = 0;

  while (i < j) {
    const distance = j - i;
    const area = Math.min(height[i], height[j]) * distance;
    max = Math.max(max, area);

    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
