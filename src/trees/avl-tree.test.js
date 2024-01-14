import { it, expect } from 'vitest'
import { AVLTree } from './avl-tree'

// Test for creating an AVL tree
it('should create an empty AVL tree', () => {
  const avl = new AVLTree()
  expect(avl.isEmpty()).toBe(true)
})

// Test for inserting elements
it('should insert elements and maintain balance', () => {
  const avl = new AVLTree()
  avl.insert(3)
  avl.insert(2)
  const newRoot = avl.insert(1)

  // Check balance after insertions
  expect(newRoot.value).toBe(2) // Root should be 2 after rotations
  expect(newRoot.left.value).toBe(1)
  expect(newRoot.right.value).toBe(3)
})

// Test for Right Rotation (LL Imbalance)
it('should perform right rotation for LL imbalance', () => {
  const avl = new AVLTree()
  avl.insert(3)
  avl.insert(2)
  const newRoot = avl.insert(1)

  expect(newRoot.value).toBe(2) // Right rotation should make 2 the root
  expect(newRoot.left.value).toBe(1)
  expect(newRoot.right.value).toBe(3)
})

// Test for Left Rotation (RR Imbalance)
it('should perform left rotation for RR imbalance', () => {
  const avl = new AVLTree()
  avl.insert(1)
  avl.insert(2)
  const newRoot = avl.insert(3)

  expect(newRoot.value).toBe(2) // Left rotation should make 2 the root
  expect(newRoot.left.value).toBe(1)
  expect(newRoot.right.value).toBe(3)
})

// Test for Left-Right Rotation (LR Imbalance)
it('should perform left-right rotation for LR imbalance', () => {
  const avl = new AVLTree()
  avl.insert(3)
  avl.insert(1)
  const newRoot = avl.insert(2)

  expect(newRoot.value).toBe(2) // Left-right rotation should make 2 the root
  expect(newRoot.left.value).toBe(1)
  expect(newRoot.right.value).toBe(3)
})

// Test for Right-Left Rotation (RL Imbalance)
it('should perform right-left rotation for RL imbalance', () => {
  const avl = new AVLTree()
  avl.insert(1)
  avl.insert(3)
  const newRoot = avl.insert(2)

  expect(newRoot.value).toBe(2) // Right-left rotation should make 2 the root
  expect(newRoot.left.value).toBe(1)
  expect(newRoot.right.value).toBe(3)
})

it('should delete a leaf node correctly', () => {
  const avl = new AVLTree()
  avl.insert(10)
  avl.insert(5)
  avl.insert(15)
  avl.delete(15)

  expect(avl.find(15)).toBeNull()
  expect(avl.find(10).right).toBeNull()
})
