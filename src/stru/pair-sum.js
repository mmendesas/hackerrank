// pairSum
// take an array and target and return indices that sum up to target

// first try with loop
const pairSum1 = (arr, target) => {
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (i === j) continue;
    if (arr[i] + arr[j] === target) {
      return [i, j];
    }
    if (j === arr.length - 1) {
      i += 1;
      continue;
    }
    j += 1;
  }

  return [];
};

// using hash maps
const pairSum = (arr, target) => {
  const map = {};

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const remain = targetSum - num;

    if (remain in map) {
      return [i, map[remain]];
    }
    map[num] = i;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8));
console.log(pairSum([4, 7, 9, 2, 5, 1], 5));
console.log(pairSum([4, 7, 9, 2, 5, 1], 3));
