/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Globally keep track of the maximum sum
  let maxGlobal = nums[0]

  // Keep track of the maximum sum for the current subarray in the iteration
  let maxCurrent = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // This is the key to the Kadane's algorithm
    // If the current number is greater than the sum of the current subarray
    // This means that we should start a new subarray
    // Otherwise, we should continue adding to the current subarray
    // So when we land on a number that is greater than the sum of the current subarray
    // We start a new subarray

    // If `Math.max(nums[i], nums[i] + maxCurrent)` is equal to `nums[i]`, then start a new subarray
    // Because the current number is greater than the sum of the current subarray

    // If `Math.max(nums[i], nums[i] + maxCurrent)` is equal to `nums[i] + maxCurrent`, then continue adding to the current subarray
    // Because the current number is less than the sum of the current subarray
    maxCurrent = Math.max(nums[i], nums[i] + maxCurrent)

    // Keep track of the maximum sum
    // Global should always be the maximum sum
    // If e.g. a new subarray was started because the previous sub array continued and encountered negative numbers
    // and eventually encountered a positive number, therefore started a new sub array
    // BUT if the previous sub array at some point was greater than the new sub array
    // Then Global should be the previous sub array at the time it was at it's peak
    maxGlobal = Math.max(maxGlobal, maxCurrent)
  }

  return maxGlobal
}
