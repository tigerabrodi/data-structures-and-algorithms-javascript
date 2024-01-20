import { expect, it } from 'vitest'
import { countOccurrences } from './countOccurrences'

it('count occurrences', () => {
  expect(countOccurrences([4, 2, 7, 4, 4, 1, 2], 4)).toBe(3)
})
