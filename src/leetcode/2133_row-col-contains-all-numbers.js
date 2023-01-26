// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/description/

var checkValid = function (matrix) {
  const rowItems = new Set()
  const colItems = new Set()

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      const rowItem = row[j]
      const colItem = matrix[j][i]

      // check out of scope
      if (rowItem > matrix.length) return false

      // check for duplicates
      if (rowItems.has(rowItem)) return false;
      else rowItems.add(rowItem)

      if (colItems.has(colItem)) return false;
      else colItems.add(colItem)
    }

    rowItems.clear()
    colItems.clear()
  }

  return true
};



console.clear()
console.log(checkValid([
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1]
])) // true

console.log(checkValid([
  [1, 1, 1],
  [1, 2, 3],
  [1, 2, 3]
])) // false
