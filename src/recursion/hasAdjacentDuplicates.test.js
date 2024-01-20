import { expect, it } from 'vitest'
import { hasAdjacentDuplicates } from './hasAdjacentDuplicates'

it('has adjacent duplicates', () => {
  expect(hasAdjacentDuplicates('hello')).toBe(true)
  expect(hasAdjacentDuplicates('world')).toBe(false)
})
