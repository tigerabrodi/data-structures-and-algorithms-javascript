import { it, expect } from 'vitest'
import { nonConstructibleChange } from './nonConstructibleChange'

it('should return the minimum amount of change that you cannot create', () => {
  const coins = [5, 7, 1, 1, 2, 3, 22]

  expect(nonConstructibleChange(coins)).toEqual(20)
})
