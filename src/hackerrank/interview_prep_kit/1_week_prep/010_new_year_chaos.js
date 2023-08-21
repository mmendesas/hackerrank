function minimumBribes(arr) {

  let chaotic = false;
  let bribes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - (i + 1) > 2) {
      chaotic = true;
      break;
    }

    for (let j = Math.max(0, arr[i] - 2); j < i; j++) {
      if (arr[j] > arr[i]) bribes += 1;
    }
  }

  return chaotic ? 'Too chaotic' : bribes
}

console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]))
