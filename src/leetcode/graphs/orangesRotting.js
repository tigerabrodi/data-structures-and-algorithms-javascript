/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const ROWS = grid.length
  const COLUMNS = grid[0].length

  let time = 0
  let fresh = 0
  let queue = []

  // Scanning the grid to find fresh and rotten oranges
  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      if (grid[row][column] === 1) {
        fresh += 1
      }
      if (grid[row][column] === 2) {
        queue.push([row, column])
      }
    }
  }

  // Early return if no fresh oranges are present initially
  if (fresh === 0) {
    return 0
  }

  const directions = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ]

  while (queue.length > 0 && fresh > 0) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      const [row, column] = queue.shift()

      for (let j = 0; j < directions.length; j++) {
        const [rowDifference, columnDifference] = directions[j]
        const newRow = row + rowDifference
        const newColumn = column + columnDifference

        if (
          newRow < 0 ||
          newRow >= ROWS ||
          newColumn < 0 ||
          newColumn >= COLUMNS ||
          grid[newRow][newColumn] !== 1
        ) {
          continue
        }

        grid[newRow][newColumn] = 2 // Mark as rotten
        fresh-- // Decrement the count of fresh oranges
        queue.push([newRow, newColumn]) // Add the newly rotten orange to the queue
      }
    }

    time++ // Increment time after processing all oranges at the current time
  }

  return fresh === 0 ? time : -1
}
