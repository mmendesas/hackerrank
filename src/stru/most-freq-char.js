// using hashmap with filter (first attempt)
const mostFrequentChar1 = (text) => {
  const freqMap = {};
  for (let c of text) {
    freqMap[c] = freqMap[c] + 1 || 1;
  }

  let max = 0;
  for (let item in freqMap) {
    if (freqMap[item] > max) {
      max = freqMap[item];
    }
  }
  const allMax = Object.keys(freqMap).filter((item) => freqMap[item] === max);

  return allMax[0];
};

// using hashmap
const mostFrequentChar = (text) => {
  const countMap = {};
  for (let c of text) {
    countMap[c] = countMap[c] + 1 || 1;
  }

  // find first most freq
  let max = text[0];
  for (let c of text) {
    if (countMap[c] > countMap[max]) {
      max = c;
    }
  }
  return max;
};

console.log(mostFrequentChar("bookeeper"));
console.log(mostFrequentChar("mississippi"));
