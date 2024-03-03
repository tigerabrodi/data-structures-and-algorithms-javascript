var maxTurbulenceSize = function (arr) {
  if (arr.length === 1) {
    return 1
  }

  let R = 1
  let L = 0

  let maxLength = 1

  let prev = ''

  while (R < arr.length) {
    if (arr[R - 1] > arr[R] && prev !== '>') {
      maxLength = Math.max(R - L + 1, maxLength)
      R++
      prev = '>'
    } else if (arr[R - 1] < arr[R] && prev !== '<') {
      // R - L + 1 is the length of the subarray
      // Example: [9, 4, 2, 10, 7, 8, 8, 1, 9]
      // L = 1, and R = 6
      // R - L + 1 = 6 - 1 + 1 = 7
      // The length of the subarray is 7
      // These would be the numbers in the subarray: [4, 2, 10, 7, 8, 8, 1]
      maxLength = Math.max(maxLength, R - L + 1)
      R++
      prev = '<'
    } else {
      // If the previous element is equal to the current element
      // We want Left pointer to be at the current element
      // and Right pointer to be at the next element
      // this is because "=" is not a valid operator to form a turbulent subarray

      // if that is not the case, we simply want to start a new subarray from the current element
      // Operator is either > or <, but same as last one, hence new subarray gotta be started
      R = arr[R] === arr[R - 1] ? R + 1 : R
      L = R - 1
      prev = ''
    }
  }

  return maxLength
}
