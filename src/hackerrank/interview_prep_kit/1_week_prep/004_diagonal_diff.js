// diagonal difference

function diagonalDifference(matrix) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < matrix.length; i++) {
    left += matrix[i][i]
    right += matrix[i][matrix.length - (i + 1)]
  }

  return Math.abs(left - right)
}

console.log(diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
])) // 2

console.log(diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
])) // 15


