// Brute Force - Time: O(2 ^ (n + m)), Space: O(n + m)
function bruteForce(r, c, rows, cols) {
  if (r == rows || c == cols) {
    return 0
  }

  if (r == rows - 1 && c == cols - 1) {
    return 1
  }

  const down = bruteForce(r + 1, c, rows, cols)
  const right = bruteForce(r, c + 1, rows, cols)

  return down + right
}

function withMemoization(r, c, rows, cols, memo) {
  if (r === rows || c === cols) {
    return 0
  }

  if (r === rows - 1 && c === cols - 1) {
    return 1
  }

  // Avoid recalculating the same subproblem
  // e.g. if we're on the second row, we don't want to have to recalculate it all the way to the destination again
  // This would mean in 4x4 grid, we'd have to recalculate entire third and fourth row
  if (memo[r][c] !== 0) {
    return memo[r][c]
  }

  const down = withMemoization(r + 1, c, rows, cols, memo)
  const right = withMemoization(r, c + 1, rows, cols, memo)

  // This is the same as the brute force solution, but we're storing the result in the memo
  // The result means "From this cell, how many ways are there to reach the destination?"
  // At the bottom row, there is only one way to reach the destination
  memo[r][c] = down + right

  return memo[r][c]
}
