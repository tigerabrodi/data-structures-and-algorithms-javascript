export const hasAdjacentDuplicates = (str, index = 0) => {
  const isOutOfBonds = index + 1 === str.length

  if (isOutOfBonds) {
    return false
  }

  const letter = str[index]
  const adjacentLetter = str[index + 1]

  if (letter === adjacentLetter) {
    return true
  }

  return hasAdjacentDuplicates(str, index + 1)
}
