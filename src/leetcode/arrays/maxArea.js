/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let L = 0
  let R = height.length - 1

  let maxHeight = 0

  while (L < R) {
    const newHeight = (R - L) * Math.min(height[L], height[R])
    maxHeight = Math.max(newHeight, maxHeight)

    if (height[L] > height[R]) {
      R--
    } else {
      L++
    }
  }

  return maxHeight
}
