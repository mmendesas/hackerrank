function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return true;
    }

    if (arr[mid] < target) {
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }
  return false;
}

console.log(binarySearch([1, 3, 5, 7], 3))
console.log(binarySearch([1, 3, 5, 7], 12))
