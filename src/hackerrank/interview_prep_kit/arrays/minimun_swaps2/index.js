// bad performance
// works correctly for 14/15 tests

const minimumSwaps2 = arr => {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = i + 1;
    if (arr[i] !== num) {
      let j = arr.indexOf(num);
      swap(arr, i, j);
      swaps++;
    }
  }
  console.log(swaps);
};

const swap = (arr, i, j) => {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
};

export default minimumSwaps2;
