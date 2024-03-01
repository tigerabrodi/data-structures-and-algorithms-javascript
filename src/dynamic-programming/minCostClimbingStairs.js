/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length
  const dp = new Array(len)

  dp[0] = cost[0]
  dp[1] = cost[1]

  for (let i = 2; i < len; i++) {
    const costOneStepAgo = dp[i - 1] + cost[i]
    const costTwoStepsAgo = dp[i - 2] + cost[i]
    const minimumCostUpToThisPoint = Math.min(costOneStepAgo, costTwoStepsAgo)
    dp[i] = minimumCostUpToThisPoint
  }

  return Math.min(dp[len - 1], dp[len - 2])
}
