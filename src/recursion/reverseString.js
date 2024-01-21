export const reverseString = (str, index = 0, accumulator = '') => {
  if (index === str.length) {
    return accumulator
  }

  accumulator = str[index] + accumulator

  return reverseString(str, index + 1, accumulator)
}
