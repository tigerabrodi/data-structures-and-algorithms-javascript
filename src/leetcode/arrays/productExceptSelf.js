function productExceptSelf(nums) {
  // 1. Get the prefix sum
  let prefix = []
  let totalForPrefix = 1

  for (let i = 0; i < nums.length; i++) {
    totalForPrefix *= nums[i]
    prefix.push(totalForPrefix)
  }

  // 2. Get the postfix sum
  let postfix = []
  let totalForPostfix = 1

  for (let i = nums.length - 1; i >= 0; i--) {
    totalForPostfix *= nums[i]

    // Here we use `unshift` to add the value to the beginning of the array

    // if we had [1, 2, 3, 4]
    // It'd look like this:
    // First iteration [] -> 1 * 4 = 4 -> [4]
    // Second iteration [4] -> 3 * 4 = 12 -> [12, 4]
    // Third iteration [12, 4] -> 2 * 12 = 24 -> [24, 12, 4]
    // Fourth iteration [24, 12, 4] -> 1 * 24 = 24 -> [24, 24, 12, 4]

    // We effectively sum up the product of the numbers from the end of the array to the beginning
    // This way when calculating the result, we can use prefix[i - 1] * postfix[i + 1]
    postfix.unshift(totalForPostfix)
  }

  // prefix would be [1, 2, 6, 24]
  // postfix would be [24, 24, 12, 4]

  // if we had [1, 2, 3, 4]
  // let's say we want the value at position 1, which is 2
  // We would multiply the prefix value at position 0, which is 1
  // With the postfix value at position 2, which is 12
  // So the result would be 1 * 12 = 12

  let result = []

  for (let i = 0; i < nums.length; i++) {
    let pre = i > 0 ? prefix[i - 1] : 1
    let post = i < nums.length - 1 ? postfix[i + 1] : 1
    result.push(pre * post)
  }

  return result
}
