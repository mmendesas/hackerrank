function findMedian(arr) {

  let freq_arr = {}
  let count = 0;
  const middle = Math.ceil(arr.length / 2)

  let min = arr[0]
  let max = arr[0]

  // sorting using map freq
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    freq_arr[num] = freq_arr[num] + 1 || 1
    if (num < min) { min = num }
    if (num > max) { max = num }
  }

  for (let i = min; i <= max; i++) {
    if (freq_arr[i]) {
      count += freq_arr[i]
      if (count >= middle) {
        return i
      }
    }
  }
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3])) // 3
console.log(findMedian([10, 11, 12, 14, 16, 25, 3])) // 12
