export function waysToClimbStairs(target, possibleSteps) {
  if (target === 0) return 1

  let nbWays = 0

  possibleSteps.forEach((step) => {
    if (target - step >= 0) {
      nbWays += waysToClimbStairs(target - step, possibleSteps)
    }
  })

  return nbWays
}

export function waysToClimbStairsWithMemoization(
  target,
  possibleSteps,
  memoization = {}
) {
  if (target === 0) return 1

  // If we already computed the number of ways to climb the stairs for the target, we return it
  // There is no need to recompute it
  if (memoization[target]) return memoization[target]

  let nbWays = 0

  // Once this process is done, we store the result in the memoization object
  possibleSteps.forEach((step) => {
    if (target - step >= 0) {
      nbWays += waysToClimbStairsWithMemoization(
        target - step,
        possibleSteps,
        memoization
      )
    }
  })

  memoization[target] = nbWays

  return nbWays
}
