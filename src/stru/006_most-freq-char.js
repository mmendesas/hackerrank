
const mostFrequentChar = (str) => {
  // hash count
  const count = {}
  for (let c of str) {
    count[c] = count[c] + 1 || 1;
  }

  // find max
  let max = str[0]; // appears first
  for (let key in count) {
    if (count[key] > count[max]) {
      max = key
    }
  }
  return max;
}


console.log(mostFrequentChar('bookeeper')); // -> 'e'
console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('eleventennine')); // -> 'e'
console.log(mostFrequentChar('csbbaa')); // -> 'b'
