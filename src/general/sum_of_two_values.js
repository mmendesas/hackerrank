//  [2 7 5 1]  - arr
//  8 - target
//  0 1 2 3

const sumOfTwoValues = (arr, target) => {
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (i !== j && arr[i] + arr[j] === target) {
      return [i, j].join(" ");
    }
    if (j == arr.length - 1) {
      i += 1;
      j = i;
      continue;
    }
    j += 1;
  }
  return "IMPOSSIBLE";
};

console.log(sumOfTwoValues([2, 7, 5, 1], 3));
