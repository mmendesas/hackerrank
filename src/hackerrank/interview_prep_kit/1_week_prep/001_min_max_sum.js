function minMaxSum(arr) {
  let i = 1;
  let sum = arr[0];
  let min = arr[0];
  let max = arr[0];

  while (i < arr.length) {
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]

    sum += arr[i] // sum everything as we only have 5 itens
    i += 1
  }

  const maxSum = sum - min;
  const minSum = sum - max;

  return [minSum, maxSum]
}

console.log(minMaxSum([1, 2, 3, 4, 5])) // 10,14
console.log(minMaxSum([1, 3, 9, 7, 5])) //16, 24
