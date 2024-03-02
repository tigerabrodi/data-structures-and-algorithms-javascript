/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const ROWS = text1.length
  const COLUMNS = text2.length

  const dp = Array(ROWS + 1)
    .fill(0)
    .map(() => Array(COLUMNS + 1).fill(0))

  for (let row = ROWS - 1; row >= 0; row--) {
    for (let col = COLUMNS - 1; col >= 0; col--) {
      if (text1[row] === text2[col]) {
        dp[row][col] = 1 + dp[row + 1][col + 1]
      } else {
        dp[row][col] = Math.max(dp[row][col + 1], dp[row + 1][col])
      }
    }
  }

  return dp[0][0]
}
