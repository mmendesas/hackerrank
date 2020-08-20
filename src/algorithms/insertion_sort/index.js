const insertionSort = list => {
  if (!list.length) return list;

  const arr = list.slice();

  let sorted = 1;

  while (sorted !== list.length) {
    let next = arr[sorted];

    for (let i = sorted - 1; i >= 0; i--) {
      if (next < arr[i]) {
        let tmp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tmp;
      }
    }

    sorted++;
  }

  return arr;
}

export default insertionSort;
