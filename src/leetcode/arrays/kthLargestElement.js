var findKthLargest = function (nums, k) {
  return quickSelect(nums, k)
}

function quickSelect(nums, k, start = 0, end = nums.length - 1) {
  let pivotIndex = partition(nums, start, end)

  let indexOfKthLargest = nums.length - k

  if (pivotIndex > indexOfKthLargest) {
    return quickSelect(nums, k, start, pivotIndex - 1)
  } else if (pivotIndex < indexOfKthLargest) {
    return quickSelect(nums, k, pivotIndex + 1, end)
  } else {
    return nums[pivotIndex]
  }
}

function partition(nums, start, end) {
  let pivotValue = nums[end]
  let pivotIndex = start

  for (let i = start; i < end; i++) {
    if (nums[i] <= pivotValue) {
      ;[nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]]
      pivotIndex++
    }
  }

  ;[nums[pivotIndex], nums[end]] = [nums[end], nums[pivotIndex]]

  return pivotIndex
}
