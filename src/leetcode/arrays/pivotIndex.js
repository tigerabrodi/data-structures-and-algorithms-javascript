/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0

  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
  }

  let leftSum = 0

  for (let j = 0; j < nums.length; j++) {
    let rightSum = total - leftSum - nums[j]

    if (leftSum === rightSum) {
      return j
    }

    leftSum += nums[j]
  }

  return -1
}
