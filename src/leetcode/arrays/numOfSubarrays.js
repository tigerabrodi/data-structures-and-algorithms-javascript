/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let L = 0
  let numberOfSubArrays = 0

  let currentSum = 0

  for (let R = 0; R < arr.length; R++) {
    currentSum += arr[R]

    const isWindowEqualToLength = R - L + 1 === k

    if (isWindowEqualToLength) {
      let average = currentSum / k
      if (average >= threshold) {
        numberOfSubArrays++
      }

      currentSum -= arr[L]
      L++
    }
  }

  return numberOfSubArrays
}
