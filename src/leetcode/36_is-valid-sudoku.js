// https://leetcode.com/problems/valid-sudoku/

const isValidSudoku = (board) => {
  const rowsSet = new Set()
  const colsSet = new Set()
  const boxSet = new Set()

  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let j = 0; j < row.length; j++) {
      const rowNum = row[j]
      const colNum = board[j][i]
      const boxNum = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]

      if (boxNum !== '.') {
        if (boxSet.has(boxNum)) return false
        boxSet.add(boxNum)
      }

      if (rowNum !== '.') {
        if (rowsSet.has(rowNum)) return false
        rowsSet.add(rowNum)
      }

      if (colNum !== '.') {
        if (colsSet.has(colNum)) return false
        colsSet.add(colNum)
      }
    }

    rowsSet.clear()
    boxSet.clear()
    colsSet.clear()
  }

  return true
}


// --- tests
const board =
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

console.clear()
console.log(isValidSudoku(board)) // true

const board02 =
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

console.log(isValidSudoku(board02)) // false


