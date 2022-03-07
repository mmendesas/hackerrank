const bubbleSort = list => {
  if(!list.length) return list;

  let arr = list.slice();
  let swapCounter = -1;
  let last = 1;

  while (swapCounter !== 0) {
    swapCounter = 0;

    for (let i = 0; i < arr.length - last; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp;
        swapCounter++;
      }
    }
    last++;
  }

  return arr;
}

export default bubbleSort;

