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
