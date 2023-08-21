
function isSorted(s) {
  const sorted = s.split('').sort().join('')
  return s === sorted
}

function getCol(arr, c) {
  return arr.reduce((acc, row) => {
    return [...acc, row[c]]
  }, []).join('')
}

function gridChallenge(grid) {
  const sorted = []

  // sort rows
  for (let row of grid) {
    sorted.push(row.split('').sort().join(''))
  }

  for (let i = 0; i < sorted[0].length; i++) {
    const col = getCol(sorted, i)
    if (!isSorted(col)) return 'NO'
  }
  return 'YES'
}

console.log(gridChallenge(['abc', 'lmp', 'qrt'])) // YES
console.log(gridChallenge(['mpxz', 'abcd', 'wlmf'])) // NO
console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv'])) // YES
console.log(gridChallenge(['cba', 'ade', 'efg'])) // YEs
console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])) // YES
