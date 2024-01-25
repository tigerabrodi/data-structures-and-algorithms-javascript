export const transposeMatrix = (matrix) => {
  let rows = matrix.length
  let columns = matrix[0].length

  const newArr = []

  for (let column = 0; column < columns; column++) {
    newArr[column] = [] // Initialize each sub-array
    for (let row = 0; row < rows; row++) {
      newArr[column][row] = matrix[row][column]
    }
  }

  return newArr
}
