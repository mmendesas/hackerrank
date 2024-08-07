// anagrams
// paper
// reapa
const anagrams1 = (a, b) => {
  if (a.length !== b.length) return false;

  for (let c of a) {
    if (!b.includes(c)) return false;
    else {
      const idx = b.indexOf(c);
      b = b.substring(0, idx) + b.substring(idx + 1)
    }
  }

  return true;
}

// map approach On
const anagrams = (a, b) => {
  if (a.length !== b.length) return false;

  const mapA = {}
  for (let c of a) {
    mapA[c] = mapA[c] + 1 || 1
  }

  for (let c of b) {
    if (!mapA[c]) return false;

    mapA[c] -= 1;
    if (mapA[c] === 0) {
      delete mapA[c]
    }
  }

  return Object.keys(mapA).length === 0;
}


console.log(anagrams('restful', 'fluster')); // -> true)
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true
console.log(anagrams('paper', 'reapa')); // -> false
