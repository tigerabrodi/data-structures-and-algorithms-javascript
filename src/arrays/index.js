// Simple, Dynamic Array in JS
const arrWithNumbers = [1, 2, 3, 4, 5]

arrWithNumbers.pop() // [1, 2, 3, 4]
arrWithNumbers.push(6) // [1, 2, 3, 4, 6]
arrWithNumbers.shift() // [2, 3, 4, 6]
arrWithNumbers.unshift(1) // [1, 2, 3, 4, 6]

// 2D Array in JS
// First index is the row
// Second index is the column
const arrWithRowsAndColumns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const firstRow = arrWithRowsAndColumns[0] // [1, 2, 3]
const secondColumnInFirstRow = arrWithRowsAndColumns[0][1] // 2
const thirdColumnInSecondRow = arrWithRowsAndColumns[1][2] // 6
