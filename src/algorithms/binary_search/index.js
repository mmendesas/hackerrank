const binarySearch = (list, target) => {
  const arr = list.slice().sort((a, b) => a - b);

  let foundIdx = -1;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = (start + end) / 2;
    if (arr[middle] === target) {
      foundIdx = middle;
      break;
    }
    else if (target < arr[middle]) {
      end = middle - 1;
    }
    else if (target > arr[middle]) {
      start = middle + 1;
    }
  }

  return foundIdx !== -1;
}

export default binarySearch;
