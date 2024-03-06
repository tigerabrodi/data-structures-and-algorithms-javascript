/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let L = 0
  let R = 2

  while (R < nums.length) {
    if (nums[L] === nums[L + 1] && nums[L + 1] === nums[R]) {
      nums.splice(R, 1)
      continue
    }

    L++
    R++
  }
}
