/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0

  while (n > 0) {
    // Use !== 0 to handle negative numbers correctly
    if ((n & 1) === 1) {
      count += 1
    }

    n = n >>> 1 // Use unsigned right shift
  }

  return count
}
