export const minSubArraySumDp = (array) => {
  if (array.length === 0) return 0

  let minSumUsingLastElementSum = array[0]
  let minSum = array[0]

  for (let i = 1; i < array.length; i++) {
    const minSumForCurrentElement = Math.min(
      array[i],
      array[i] + minSumUsingLastElementSum
    )
    minSumUsingLastElementSum = minSumForCurrentElement
    minSum = Math.min(minSumForCurrentElement, minSum)
  }

  return minSum
}
