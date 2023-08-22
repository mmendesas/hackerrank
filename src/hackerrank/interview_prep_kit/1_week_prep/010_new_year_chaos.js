function rotateItem(arr, pos, dist) {
  const list = [...arr]
  for (let i = 0; i < dist; i++) {
    let item = list[pos + i];
    list[pos + i] = list[pos + i + 1]
    list[pos + i + 1] = item
  }
  return list;
}

// loop in reverse order and use size as the number at position x
// list with 3 items, last pos is the number 3 (size)
// then calculate the move required to order it.

function minimumBribes(arr) {
  let currentNumber = arr.length;
  let bribes = 0;

  for (let i = currentNumber - 1; i >= 0; i--) {
    if (arr[i] === currentNumber) {

      let expectedPos = currentNumber - 1;
      let distance = expectedPos - i;

      if (distance > 2) {
        bribes = 'Too chaotic'
        break;
      }

      if (distance > 0) {
        arr = rotateItem(arr, i, distance)
        bribes += distance
      }

      currentNumber--;
      i = currentNumber;
    }
  }
  console.log(bribes)
}

minimumBribes([2, 1, 5, 3, 4]) // 3
minimumBribes([2, 5, 1, 3, 4]) // Too chaotic
minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]) // 1
