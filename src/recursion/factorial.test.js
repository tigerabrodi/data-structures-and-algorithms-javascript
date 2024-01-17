import { it, expect } from 'vitest'
import { factorial } from './factorial'

it('should return 120 for 5', () => {
  expect(factorial(5)).toBe(120)
})
