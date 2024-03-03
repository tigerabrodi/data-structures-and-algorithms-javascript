/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let maxGlobal = nums[0]
  let currentSum = nums[0]

  let minGlobal = nums[0]
  let currentMin = nums[0]

  let total = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // keep track of the maximum subarray sum
    currentSum = Math.max(nums[i], nums[i] + currentSum)
    maxGlobal = Math.max(currentSum, maxGlobal)

    // keep track of the minimum subarray sum
    currentMin = Math.min(nums[i], nums[i] + currentMin)
    minGlobal = Math.min(currentMin, minGlobal)

    // keep track of the total sum of the array
    total += nums[i]
  }

  // if total is equal to minGlobal, then return maxGlobal
  // this means all numbers are negative
  // this is because if all negative numbers add up to the total, they will be the least possible sum
  if (total === minGlobal) {
    return maxGlobal
  }

  // Otherwise, return the maximum of the total minus the minimum subarray sum
  // however, it may not be the answer
  // so we have to compare it with maxGlobal
  // these both are to right possible options, we want the maximum of the two
  return Math.max(maxGlobal, total - minGlobal)
}
