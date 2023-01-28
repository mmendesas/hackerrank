
// https://leetcode.com/problems/matrix-diagonal-sum/description/

function diagonalSum(matrix) {
  if (!matrix.length) return 0

  const n = matrix.length;
  let line01 = 0;
  let line02 = 0;

  // top left to bottom right
  for (let i = 0; i < n; i++) {
    line01 += matrix[i][i]

    const lineIdx = n - (i + 1)
    line02 += lineIdx != i ? matrix[lineIdx][i] : 0 // skip num already used
  }

  return line01 + line02
}

console.clear()
console.log(diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]
)) // 25

console.log(diagonalSum([
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
])) // 8

console.log(diagonalSum([[5]])) // 5
