import { expect, it } from 'vitest'
import { minCostPath } from './minCostPath'

it('minCostPath', () => {
  const grid = [
    [3, 12, 4, 7, 10],
    [6, 8, 15, 11, 4],
    [19, 5, 14, 32, 21],
    [1, 20, 2, 9, 7],
  ]

  expect(minCostPath(grid)).toBe(54)
})
