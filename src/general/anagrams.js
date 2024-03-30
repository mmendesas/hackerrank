//  anagrams
//  strings that contain same characters but in any ordersl

// using map to count letters
const anagrams1 = (textA, textB) => {
  if (textA.length !== textB.length) return false;

  const mapA = {};
  for (let a of textA) {
    mapA[a] = mapA[a] + 1 || 1;
  }

  for (let b of textB) {
    if (!mapA[b]) return false;

    mapA[b] -= 1;
    if (mapA[b] === 0) {
      delete mapA[b];
    }
  }

  return Object.keys(mapA).length === 0;
};

// removing visited letter
const anagrams = (textA, textB) => {
  if (textA.length !== textB.length) return false;
  let copyB = textB;

  for (let c of textA) {
    const idx = copyB.indexOf(c);
    if (idx === -1) return false;

    // remove letter from textB
    const left = copyB.substring(0, idx);
    const right = copyB.substring(idx + 1, copyB.length);
    copyB = left + right;
  }

  return copyB.length === 0;
};

// using sort
const anagrams2 = (textA, textB) => {
  if (textA.length !== textB.length) return false;

  const sortedA = textA.split("").sort().join("");
  const sortedB = textB.split("").sort().join("");

  return sortedA === sortedB;
};

console.log(anagrams("restful", "fluster")); // true
console.log(anagrams("monkeyswrite", "newyorktimes")); // true
console.log(anagrams("tax", "taxi")); // false
