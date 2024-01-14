import { it, expect } from 'vitest'
import { AVLTree } from './avl-tree'

// Test for creating an AVL tree
it.only('should create an empty AVL tree', () => {
  const avl = new AVLTree()
  expect(avl.isEmpty()).toBe(true)
})

// Test for inserting elements
it('should insert elements and maintain balance', () => {
  const avl = new AVLTree()
  avl.insert(3)
  avl.insert(2)
  avl.insert(1)

  // Check balance after insertions
  expect(avl.root.value).toBe(2) // Root should be 2 after rotations
  expect(avl.root.left.value).toBe(1)
  expect(avl.root.right.value).toBe(3)
})

// Test for Right Rotation (LL Imbalance)
it('should perform right rotation for LL imbalance', () => {
  const avl = new AVLTree()
  avl.insert(3)
  avl.insert(2)
  avl.insert(1)

  // Right rotation should occur, making 2 the root
  expect(avl.root.value).toBe(2)
})

// Test for Left Rotation (RR Imbalance)
it('should perform left rotation for RR imbalance', () => {
  const avl = new AVLTree()
  avl.insert(1)
  avl.insert(2)
  avl.insert(3)

  // Left rotation should occur, making 2 the root
  expect(avl.root.value).toBe(2)
})

// Test for Left-Right Rotation (LR Imbalance)
it('should perform left-right rotation for LR imbalance', () => {
  const avl = new AVLTree()
  avl.insert(3)
  avl.insert(1)
  avl.insert(2)

  // Left-right rotation should occur
  expect(avl.root.value).toBe(2)
})

// Test for Right-Left Rotation (RL Imbalance)
it('should perform right-left rotation for RL imbalance', () => {
  const avl = new AVLTree()
  avl.insert(1)
  avl.insert(3)
  avl.insert(2)

  // Right-left rotation should occur, making 2 the root
  expect(avl.root.value).toBe(2)
})

// Test for Finding Elements
it('should find elements correctly in the AVL tree', () => {
  const avl = new AVLTree()
  avl.insert(2)
  avl.insert(1)
  avl.insert(3)

  expect(avl.find(1).value).toBe(1)
  expect(avl.find(3).value).toBe(3)
})

// Test for Deleting Elements
it('should delete elements and maintain balance', () => {
  const avl = new AVLTree()
  avl.insert(2)
  avl.insert(1)
  avl.insert(3)
  avl.delete(1)

  // Check balance after deletion
  expect(avl.find(1)).toBeNull()
  expect(avl.root.value).toBe(2) // Check root remains balanced
})

// Additional tests can be added as needed to cover more scenarios
