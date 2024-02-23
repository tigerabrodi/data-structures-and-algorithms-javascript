/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0

  const ROWS = grid.length
  const COLUMNS = grid[0].length

  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      if (grid[row][column] === '1') {
        count++
        floodFill(grid, row, column)
      }
    }
  }

  return count
}

function floodFill(grid, row, column) {
  if (row < 0 || column < 0) {
    return
  }

  if (row >= grid.length || column >= grid[0].length) {
    return
  }

  if (grid[row][column] === '2' || grid[row][column] === '0') {
    return
  }

  grid[row][column] = '2'
  floodFill(grid, row + 1, column)
  floodFill(grid, row - 1, column)
  floodFill(grid, row, column + 1)
  floodFill(grid, row, column - 1)
}
