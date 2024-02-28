/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, cache = {}) {
  if (n < 2) return n

  if (cache[n] !== undefined) {
    return cache[n]
  }

  cache[n] = fib(n - 1) + fib(n - 2)

  return cache[n]
}
