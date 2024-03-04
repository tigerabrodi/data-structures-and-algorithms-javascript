/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestLength = 0
  let L = 0

  let window = new Set()

  for (let R = 0; R < s.length; R++) {
    while (window.has(s[R])) {
      window.delete(s[L])
      L++
    }

    longestLength = Math.max(longestLength, R - L + 1)
    window.add(s[R])
  }

  return longestLength
}

// https://leetcode.com/explore/learn/card/dynamic-programming/631/strategy-for-solving-dp-problems/4099/
