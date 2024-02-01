function binarySearch(array, target) {
  let leftPointer = 0
  let rightPointer = array.length - 1

  while (leftPointer <= rightPointer) {
    const mid = Math.floor((leftPointer + rightPointer) / 2)

    if (target === array[mid]) {
      return mid
    }

    if (target > array[mid]) {
      leftPointer = mid + 1
    } else {
      rightPointer = mid - 1
    }
  }

  return -1
}
