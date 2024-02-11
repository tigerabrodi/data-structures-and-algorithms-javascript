function quickSort(arr, start = 0, end = arr.length - 1) {
  // Base condition to end recursion
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
