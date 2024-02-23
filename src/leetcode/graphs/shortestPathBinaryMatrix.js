/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let ROWS = grid.length
  let COLUMNS = grid[0].length
  let visit = new Array(ROWS).fill(0).map(() => new Array(COLUMNS).fill(0))
  let queue = [[0, 0, 1]]
  visit[0][0] = 1

  if (grid[0][0] === 1 || grid[ROWS - 1][COLUMNS - 1] === 1) {
    return -1
  }

  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [row, col, pathLength] = queue.shift()

      if (row === ROWS - 1 && col === COLUMNS - 1) {
        return pathLength
      }

      const neighbours = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
        [row + 1, col + 1],
        [row + 1, col - 1],
        [row - 1, col + 1],
        [row - 1, col - 1],
      ]

      for (let j = 0; j < neighbours.length; j++) {
        const [newRow, newCol] = neighbours[j]

        if (
          Math.min(newRow, newCol) < 0 ||
          newRow === ROWS ||
          newCol === COLUMNS ||
          visit[newRow][newCol] === 1 ||
          grid[newRow][newCol] === 1
        ) {
          continue
        }

        queue.push([newRow, newCol, pathLength + 1])
        visit[newRow][newCol] = 1
      }
    }
  }

  return -1
}
