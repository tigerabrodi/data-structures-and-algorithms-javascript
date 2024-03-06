/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefix = []
  this.total = 0

  for (let i = 0; i < nums.length; i++) {
    this.total += nums[i]
    this.prefix.push(this.total)
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let preRight = this.prefix[right]
  let preLeft = left > 0 ? this.prefix[left - 1] : 0
  return preRight - preLeft
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
