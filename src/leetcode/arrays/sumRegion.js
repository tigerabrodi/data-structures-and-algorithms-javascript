/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const ROWS = matrix.length
  const COLUMNS = matrix[0].length

  this.sum = Array(ROWS + 1)
    .fill(0)
    .map(() => Array(COLUMNS + 1).fill(0))

  this.total = 0

  for (let row = 0; row < ROWS; row++) {
    let prefix = 0
    for (let col = 0; col < COLUMNS; col++) {
      prefix += matrix[row][col]
      let above = this.sum[row][col + 1] // Correction: Add the sum directly above the current cell
      this.sum[row + 1][col + 1] = above + prefix
    }
  }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let bottomRight = this.sum[row2 + 1][col2 + 1]
  let leftToSubtract = this.sum[row2 + 1][col1] // should subtract from col1, not add
  let topToSubtract = this.sum[row1][col2 + 1] // Correctly subtracting the top area
  let topLeftToAddBack = this.sum[row1][col1] // This is the area subtracted twice and needs to be added back

  return bottomRight - leftToSubtract - topToSubtract + topLeftToAddBack
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
