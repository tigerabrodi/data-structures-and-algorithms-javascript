/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let count = {}
  let L = 0

  let longestRepeatingLength = 0
  let maxf = 0
  for (let R = 0; R < s.length; R++) {
    count[s[R]] = 1 + (count[s[R]] || 0)
    maxf = Math.max(count[s[R]], maxf)

    while (R - L + 1 - maxf > k) {
      count[s[L]] -= 1
      L++
    }

    longestRepeatingLength = Math.max(longestRepeatingLength, R - L + 1)
  }

  return longestRepeatingLength
}
