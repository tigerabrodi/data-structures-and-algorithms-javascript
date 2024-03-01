/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, cache = {}) {
  if (n < 2) return n
  if (n === 2) return 1

  if (cache[n] !== undefined) {
    return cache[n]
  }

  cache[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)

  return cache[n]
}
