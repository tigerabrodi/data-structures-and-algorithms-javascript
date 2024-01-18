import { it, expect } from 'vitest'
import { waysToClimbStairs } from './ways-to-climb-stairs'

it('should return 11 for [2, 4, 5, 8] and 10 as target', () => {
  expect(waysToClimbStairs(10, [2, 4, 5, 8])).toBe(11)
})
