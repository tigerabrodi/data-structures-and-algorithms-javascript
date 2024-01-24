export function sortedSquaredArray(array) {
  let leftPointer = 0
  let rightPointer = array.length - 1

  const newArr = []

  while (leftPointer !== rightPointer) {
    const leftNum = array[leftPointer]
    const rightNum = array[rightPointer]

    if (Math.pow(leftNum, 2) > Math.pow(rightNum, 2)) {
      newArr.unshift(leftNum * leftNum)
      leftPointer++
    } else {
      newArr.unshift(rightNum * rightNum)
      rightPointer--
    }
  }

  newArr.unshift(array[leftPointer] * array[leftPointer])

  return newArr
}
