export function twoNumberSum(array, targetSum) {
  let numSet = new Set()

  for (let i = 0; i < array.length; i++) {
    const num = array[i]

    const targetNum = targetSum - num

    if (numSet.has(targetNum)) {
      return [num, targetNum]
    }

    numSet.add(num)
  }

  return []
}
