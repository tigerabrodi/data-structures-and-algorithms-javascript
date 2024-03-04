/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minimumLength = Infinity

  let curSum = 0
  let L = 0

  for (let R = 0; R < nums.length; R++) {
    curSum += nums[R]

    while (curSum >= target) {
      let currentLength = R - L + 1
      minimumLength = Math.min(minimumLength, currentLength)
      curSum -= nums[L]
      L++
    }
  }

  if (minimumLength === Infinity) {
    return 0
  }

  return minimumLength
}
