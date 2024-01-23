import { it, expect } from 'vitest'
import { twoNumberSum } from './twoNumberSum'

it('should return an empty array if no two numbers sum to the target sum', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const targetSum = 100

  expect(twoNumberSum(array, targetSum)).toEqual([])
})

it('should return an empty array if the input array has less than two numbers', () => {
  const array = [1]
  const targetSum = 100

  expect(twoNumberSum(array, targetSum)).toEqual([])
})

it.only('should return two values that sum to the target sum', () => {
  const array = [3, 5, -4, 8, 11, 1, -1, 6]
  const targetSum = 10

  expect(twoNumberSum(array, targetSum)).toEqual([-1, 11])
})
