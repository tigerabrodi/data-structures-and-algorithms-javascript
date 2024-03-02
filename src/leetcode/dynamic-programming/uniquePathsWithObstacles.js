// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function (obstacleGrid) {
//   let row = 0
//   let col = 0
//   const ROWS = obstacleGrid.length
//   const COLUMNS = obstacleGrid[0].length
//   const cache = Array(ROWS)
//     .fill(0)
//     .map(() => Array(COLUMNS).fill(0))
//   return dp(row, col, ROWS, COLUMNS, obstacleGrid, cache)
// }

// function dp(row, col, ROWS, COLUMNS, grid, cache) {
//   if (row >= ROWS || col >= COLUMNS) {
//     return 0
//   }

//   if (grid[row][col] === 1) {
//     return 0
//   }

//   if (row === ROWS - 1 && col === COLUMNS - 1) {
//     return 1
//   }

//   if (cache[row][col] !== 0) {
//     return cache[row][col]
//   }

//   cache[row][col] =
//     dp(row + 1, col, ROWS, COLUMNS, grid, cache) +
//     dp(row, col + 1, ROWS, COLUMNS, grid, cache)

//   return cache[row][col]
// }

function uniquePathsWithObstaclesBottomUp(obstacleGrid) {
  let ROWS = obstacleGrid.length
  let COLS = obstacleGrid[0].length
  let dp = Array(ROWS)
    .fill(0)
    .map(() => Array(COLS).fill(0))

  for (let row = ROWS - 1; row >= 0; row--) {
    for (let col = COLS - 1; col >= 0; col--) {
      if (obstacleGrid[row][col] === 1) {
        // if obstacle, set to 0
        // because we can't go through obstacles
        // so there are no paths
        dp[row][col] = 0
      } else if (row === ROWS - 1 && col === COLS - 1) {
        // we start at the bottom right
        // so there's only one path
        dp[row][col] = 1
      } else {
        const isRowNotOutOfBounds = row + 1 < ROWS
        const isColNotOutOfBounds = col + 1 < COLS

        // if we're not at the bottom row
        // and not an obstacle
        // we calculate the number of paths
        // by adding the number of paths from the cell below
        // and the number of paths from the cell to the right

        // if out of bounds, nothing to add
        // so we set to 0
        let down = isRowNotOutOfBounds ? dp[row + 1][col] : 0
        let right = isColNotOutOfBounds ? dp[row][col + 1] : 0

        dp[row][col] = down + right
      }
    }
  }
  return dp[0][0]
}
