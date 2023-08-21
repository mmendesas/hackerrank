// flipping matrix
// discover the maximal sum of top left quadrant of matrix

function flippingMatrix(matrix) {
  let sum = 0;
  let size = matrix.length;
  for (let i = 0; i < size / 2; i++) {
    for (let j = 0; j < size / 2; j++) {
      sum += Math.max(
        matrix[i][j], // upper left
        matrix[i][size - 1 - j], // upper right
        matrix[size - 1 - i][j], // lower left
        matrix[size - 1 - i][size - 1 - j] // lower right
      )
    }
  }
  return sum
}

// solving using mirror logic
// const matrix = [
//   [A, B, B, A],
//   [C, D, D, C],
//   [C, D, D, C],
//   [A, B, B, A],
// ]

// console.log(flippingMatrix([
//   [1, 2],
//   [3, 4]
// ]))

console.log(flippingMatrix([
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
])) // 414
