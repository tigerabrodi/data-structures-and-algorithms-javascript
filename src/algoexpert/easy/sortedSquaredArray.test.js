import { expect, it } from 'vitest'
import { sortedSquaredArray } from './sortedSquaredArray'

it('should return an array with 6 values', () => {
  const array = [1, 2, 3, 5, 6, 8]

  expect(sortedSquaredArray(array)).toEqual([1, 4, 9, 25, 36, 64])
})

it('should return an array with 8 values, even if they contain negative numbers', () => {
  const array = [-10, -5, 0, 5, 10]

  expect(sortedSquaredArray(array)).toEqual([0, 25, 25, 100, 100])
})
