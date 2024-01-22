export const fibMemoization = (n, memo = {}) => {
  if (n <= 2) return n

  if (n in memo) return memo[n]

  memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo)
  return memo[n]
}
