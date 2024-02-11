/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = []

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < nums.length; j++) {
      ans.push(nums[j])
    }
  }

  return ans
}
