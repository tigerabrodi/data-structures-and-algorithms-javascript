import { it, expect } from 'vitest'
import { nodeDepths } from './nodeDepths'

it('returns correct depth for a single node tree', () => {
  const tree = { value: 1, left: null, right: null }
  expect(nodeDepths(tree)).toBe(0)
})

it('returns correct depth for a two level tree', () => {
  const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  }
  expect(nodeDepths(tree)).toBe(2)
})
