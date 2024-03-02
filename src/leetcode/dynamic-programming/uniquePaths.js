/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (rows, cols) {
  let prevRow = Array(cols).fill(0)

  for (let row = rows - 1; row >= 0; row--) {
    let currentRow = Array(cols).fill(0)
    currentRow[cols - 1] = 1

    for (let col = cols - 2; col >= 0; col--) {
      currentRow[col] = currentRow[col + 1] + prevRow[col]
    }

    prevRow = currentRow
  }

  return prevRow[0]
}
