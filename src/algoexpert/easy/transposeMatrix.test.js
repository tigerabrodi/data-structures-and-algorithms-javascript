import { it, expect } from 'vitest'
import { transposeMatrix } from './transposeMatrix'

it('transposeMatrix', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
  ]

  const expected = [
    [1, 4],
    [2, 5],
    [3, 6],
  ]

  expect(transposeMatrix(matrix)).toEqual(expected)
})
