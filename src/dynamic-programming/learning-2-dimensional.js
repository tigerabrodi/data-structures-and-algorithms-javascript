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
