export function isValidSubsequence(array, sequence) {
  let sequencePointer = 0
  let arrayPointer = 0

  while (arrayPointer !== array.length) {
    if (array[arrayPointer] === sequence[sequencePointer]) {
      sequencePointer++
    }

    arrayPointer++
  }

  return sequencePointer === sequence.length ? true : false
}
