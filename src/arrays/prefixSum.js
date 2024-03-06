class PrefixSum {
  constructor(nums) {
    this.prefix = []
    this.total = 0

    for (let i = 0; i < nums.length; i++) {
      this.total += nums[i]
      this.prefix.push(this.total)
    }
  }

  rangeSum(left, right) {
    let preRight = this.prefix[right]
    let preLeft = left > 0 ? this.prefix[left - 1] : 0
    return preRight - preLeft
  }
}
