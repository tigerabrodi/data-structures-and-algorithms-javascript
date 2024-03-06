/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let R = 1
  let L = 0

  while (R < nums.length) {
    if (nums[L] === nums[R]) {
      nums.splice(R, 1)
      continue
    }

    L++
    R++
  }
}
