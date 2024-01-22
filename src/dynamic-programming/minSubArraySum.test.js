import { it, expect } from 'vitest'
import { minSubArraySumDp } from './minSubArraySum'

it('minSubArraySumDp', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  expect(minSubArraySumDp(array)).toBe(1)
})
