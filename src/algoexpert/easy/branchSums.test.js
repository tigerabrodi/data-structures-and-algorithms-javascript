import { branchSums } from './branchSums'
import { it, expect } from 'vitest'

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

it('calculates branch sums for a binary tree', () => {
  const bst = new BST(1)
  bst.left = new BST(2)
  bst.right = new BST(3)
  bst.left.left = new BST(4)
  bst.left.right = new BST(5)
  bst.right.left = new BST(6)
  bst.right.right = new BST(7)
  const sums = branchSums(bst)
  expect(sums).toEqual([7, 8, 10, 11])
})

it('calculates branch sums for a binary tree with single branch', () => {
  const bst = new BST(1)
  bst.left = new BST(2)
  bst.left.left = new BST(3)
  const sums = branchSums(bst)
  expect(sums).toEqual([6])
})

it('calculates branch sums for a binary tree with single node', () => {
  const bst = new BST(1)
  const sums = branchSums(bst)
  expect(sums).toEqual([1])
})
