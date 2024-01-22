export const minCostPath = (grid, row = 0, column = 0, accumulator = 0) => {
  const isLastRow = row === grid.length - 1
  const isLastColumn = column === grid[0].length - 1

  if (isLastColumn && isLastRow) {
    const lastValue = grid[row][column]
    return accumulator + lastValue
  }
}
