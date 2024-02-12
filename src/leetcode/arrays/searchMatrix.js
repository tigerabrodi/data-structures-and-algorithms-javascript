/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const ROWS = matrix.length
  const COLUMNS = matrix[0].length

  let top = 0
  let bottom = ROWS - 1
  while (top <= bottom) {
    const mid = Math.floor((bottom + top) / 2)

    if (target > matrix[mid][COLUMNS - 1]) {
      top = mid + 1
    } else if (target < matrix[mid][0]) {
      bottom = mid - 1
    } else {
      // If the target is within the range of the current row, break to search in this row.
      break
    }
  }

  // If the target row was not found, return false.
  if (top > bottom) {
    return false
  }

  // At this point, top is the row where the target might be.
  let row = Math.floor((bottom + top) / 2)

  let left = 0
  let right = COLUMNS - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (matrix[row][mid] > target) {
      right = mid - 1
    } else if (matrix[row][mid] < target) {
      left = mid + 1
    } else {
      return true // Return true since the target is found.
    }
  }

  return false // Target is not found in the matrix.
}
