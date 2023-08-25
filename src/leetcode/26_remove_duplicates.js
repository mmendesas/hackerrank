// remove duplicates from sorted array

function removeDuplicates(arr) {
  let replace = 1;  // 1st already sorted
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[replace] = arr[i]
      replace += 1
    }
  }
  return replace
}

console.log(removeDuplicates([1, 1, 2])) // [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // [1,2, 3,4]
console.log(removeDuplicates([1, 2, 2, 3]))
