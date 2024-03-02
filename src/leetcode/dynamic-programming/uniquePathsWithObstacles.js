/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let row = 0
  let col = 0
  const ROWS = obstacleGrid.length
  const COLUMNS = obstacleGrid[0].length
  const cache = Array(ROWS)
    .fill(0)
    .map(() => Array(COLUMNS).fill(0))
  return dp(row, col, ROWS, COLUMNS, obstacleGrid, cache)
}

function dp(row, col, ROWS, COLUMNS, grid, cache) {
  if (row >= ROWS || col >= COLUMNS) {
    return 0
  }

  if (grid[row][col] === 1) {
    return 0
  }

  if (row === ROWS - 1 && col === COLUMNS - 1) {
    return 1
  }

  if (cache[row][col] !== 0) {
    return cache[row][col]
  }

  cache[row][col] =
    dp(row + 1, col, ROWS, COLUMNS, grid, cache) +
    dp(row, col + 1, ROWS, COLUMNS, grid, cache)

  return cache[row][col]
}
