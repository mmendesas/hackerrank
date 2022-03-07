const selectionSort = list => {
  if (!list.length) return list;

  let arr = list.slice();
  let idx = 0;

  while (idx !== arr.length - 1) {
    // search small
    let small = idx;
    for (let i = idx; i < arr.length; i++) {
      if (arr[i] < arr[small]) {
        small = i;
      }
    }

    // swap
    if (small != idx) {
      const tmp = arr[idx];
      arr[idx] = arr[small];
      arr[small] = tmp;
    }

    idx++;
  }

  return arr;
}

export default selectionSort;

