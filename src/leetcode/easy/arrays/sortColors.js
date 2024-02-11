/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const counts = [0, 0, 0]

  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++
  }

  let i = 0
  for (let n = 0; n < counts.length; n++) {
    for (let j = 0; j < counts[n]; j++) {
      nums[i] = n
      i++
    }
  }
}
