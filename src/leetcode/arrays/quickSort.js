function quickSort(arr, start = 0, end = arr.length - 1) {
  // Base condition to end recursion
  // If start is greater than or equal to end, the array is already sorted
  // and does not need to be partitioned further
  // For example, an array of 1 element is already sorted
  // and an array of 0 elements is already sorted
  if (start >= end) return arr

  // Partition the array and get the pivot's final position
  let pivotIndex = partition(arr, start, end)

  // Recursively sort elements before the pivot
  quickSort(arr, start, pivotIndex - 1)

  // Recursively sort elements after the pivot
  quickSort(arr, pivotIndex + 1, end)

  return arr
}

function partition(arr, start, end) {
  // Choosing the pivot as the last element of the segment
  const pivotValue = arr[end]
  let pivotIndex = start // This will track the final index of the pivot

  // for example: [10, 6, 2, 5, 7, 3, 4]
  // pivotValue = 4
  // pivotIndex = 0
  // start = 0
  // end = 6

  // 10 is greater than 4, so it needs to be moved to the right part
  // We leave pivotIndex as is, but we increment `i`.
  // This means pivotIndex will be at the first position, where value 10 is.
  // i is now 1
  // 6 is greater than 4, so it needs to be moved to the right part, hence we leave pivotIndex but increase the i index
  // i is now 2
  // 2 is less than 4, we hit our if condition
  // so now we swap 2 with 10, because pivotIndex is still at 0

  // this would continue on until we reach the end, it's important to note that the end is the pivot
  // because we're saying i less than end, end is the index of the pivot, not "length" in traditional sense
  // so at the end, we still have the pivot value
  // we swap the pivot value with the value at the pivotIndex, and we return the pivotIndex
  // pivotindex at the end will be the final position of the pivot
  // so everything to the left of the pivotIndex will be less than the pivot value
  // and everything to the right of the pivotIndex will be greater than the pivot value

  for (let i = start; i < end; i++) {
    // If an element is less than the pivot, it needs to be moved to the left part
    if (arr[i] < pivotValue) {
      // Traditional swapping using a temporary variable
      let temp = arr[i]
      arr[i] = arr[pivotIndex]
      arr[pivotIndex] = temp

      // Move pivotIndex to the right, marking a new position for smaller elements
      pivotIndex++
    }
  }

  // Swap the pivot with the element at the pivotIndex, placing the pivot correctly
  let temp = arr[pivotIndex]
  arr[pivotIndex] = arr[end]
  arr[end] = temp

  return pivotIndex // Return the final position of the pivot
}

// Example usage
let unsortedArray = [10, 6, 8, 5, 7, 3, 4]
console.log(quickSort(unsortedArray)) // Output should be the sorted array
