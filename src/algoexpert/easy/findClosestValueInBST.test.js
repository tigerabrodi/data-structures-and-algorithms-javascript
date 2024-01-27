import { it, expect } from 'vitest'
import { findClosestValueInBst } from './findClosestValueInBST'

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

it('finds closest value in BST', () => {
  const bst = new BST(10)
  bst.left = new BST(5)
  bst.right = new BST(15)
  bst.left.left = new BST(2)
  bst.left.right = new BST(5)
  bst.right.left = new BST(13)
  bst.right.right = new BST(22)
  bst.right.left.right = new BST(14)
  const target = 12
  const closest = findClosestValueInBst(bst, target)
  expect(closest).toBe(13)
})

it('finds closest value in BST when target is equal to a node', () => {
  const bst = new BST(10)
  bst.left = new BST(5)
  bst.right = new BST(15)
  const target = 15
  const closest = findClosestValueInBst(bst, target)
  expect(closest).toBe(15)
})

it('finds closest value in BST when BST has only one node', () => {
  const bst = new BST(10)
  const target = 15
  const closest = findClosestValueInBst(bst, target)
  expect(closest).toBe(10)
})
