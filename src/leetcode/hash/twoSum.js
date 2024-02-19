/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i]

    if (hash[difference] !== undefined) {
      return [hash[difference], i]
    }

    hash[nums[i]] = i
  }
}
