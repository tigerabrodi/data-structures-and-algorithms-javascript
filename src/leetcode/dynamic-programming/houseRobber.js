/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prev1 = nums[0]
  let prev2 = 0

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) continue

    let temp = Math.max(prev2 + nums[i], prev1)

    prev2 = prev1
    prev1 = temp
  }

  return prev1
}
