import { it, expect } from 'vitest'
import { isValidSubsequence } from './validateSubsequence'

it('is valid subsequence with numbers', () => {
  // true
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, 10]

  expect(isValidSubsequence(array, sequence)).toEqual(true)

  // false
  const array2 = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence2 = [5, 1, 22, 25, 6, -1, 8, 10, 12]
  expect(isValidSubsequence(array2, sequence2)).toEqual(false)
})
