/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const window = new Set()
  let L = 0

  const realK = k + 1

  for (let R = 0; R < nums.length; R++) {
    const isNewWindowExceedingKLength = R - L + 1 > realK

    if (isNewWindowExceedingKLength) {
      window.delete(nums[L])
      L++
    }

    if (window.has(nums[R])) {
      return true
    }

    window.add(nums[R])
  }

  return false
}
