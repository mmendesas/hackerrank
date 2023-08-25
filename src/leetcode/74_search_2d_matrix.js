function search2DMatrix(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0;
  let col = n - 1;

  while (row < m && col >= 0) {
    if (matrix[row][col] === target) return true;

    if (matrix[row][col] > target) {
      col--;
    } else {
      row++
    }
  }
  return false
}


const matrix01 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]

console.log(search2DMatrix(matrix01, 3)) // true
console.log(search2DMatrix(matrix01, 13)) // false
