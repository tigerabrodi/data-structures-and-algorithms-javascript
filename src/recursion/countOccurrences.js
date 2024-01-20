export const countOccurrences = (
  arrOfNums,
  num,
  totalCount = 0,
  currentIndex = 0
) => {
  if (currentIndex === arrOfNums.length) {
    return totalCount
  }

  if (arrOfNums[currentIndex] === num) {
    totalCount++
  }

  return countOccurrences(arrOfNums, num, totalCount, currentIndex + 1)
}
