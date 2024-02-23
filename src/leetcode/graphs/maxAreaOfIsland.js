/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === 1) {
        const newArea = floodFill(grid, row, column)
        maxArea = Math.max(newArea, maxArea)
      }
    }
  }

  return maxArea
}

function floodFill(grid, row, column) {
  if (row < 0 || column < 0) {
    return 0
  }

  if (row >= grid.length || column >= grid[0].length) {
    return 0
  }

  if (grid[row][column] === 2 || grid[row][column] === 0) {
    return 0
  }

  grid[row][column] = 2

  let count = 1
  count += floodFill(grid, row - 1, column)
  count += floodFill(grid, row + 1, column)
  count += floodFill(grid, row, column + 1)
  count += floodFill(grid, row, column - 1)

  return count
}
