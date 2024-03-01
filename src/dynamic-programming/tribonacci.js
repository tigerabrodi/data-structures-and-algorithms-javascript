// /**
//  * @param {number} n
//  * @return {number}
//  */
// var tribonacci = function (n, cache = {}) {
//   if (n < 2) return n
//   if (n === 2) return 1

//   if (cache[n] !== undefined) {
//     return cache[n]
//   }

//   cache[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)

//   return cache[n]
// }

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  let dp = [0, 1, 1]

  for (let i = 3; i <= n; i++) {
    let sum = dp[0] + dp[1] + dp[2]

    dp[0] = dp[1]
    dp[1] = dp[2]
    dp[2] = sum
  }

  return dp[2]
}
