const minimumBribes = arr => {
  let size = arr.length;
  let bribes = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === size) {
      let posCorreta = size - 1;
      let dist = posCorreta - i;

      // distance greater than 2 is wrong
      if (dist > 2) {
        bribes = `Too chaotic`;
        break;
      }

      if (dist > 0) {
        rotateItem(arr, i, dist);
        bribes += dist;
      }

      size--;
      i = size;
    }
  }
  console.log(bribes);
};

const rotateItem = (arr, pos, dist) => {
  for (let i = 0; i < dist; i++) {
    let item = arr[pos];
    arr[pos] = arr[pos + 1];
    arr[pos + 1] = item;
    pos++; // get next item
  }
};

export default minimumBribes;
