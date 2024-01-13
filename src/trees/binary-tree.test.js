import { it, expect } from 'vitest'
import { BinaryTree } from './binary-tree'

// Test for creating a new binary tree
it('should create an empty binary tree', () => {
  const tree = new BinaryTree()
  expect(tree).toBeDefined()
  expect(tree.isEmpty()).toBe(true)
})

// Test for inserting elements
it('should insert elements', () => {
  const tree = new BinaryTree()
  tree.insert(3)
  tree.insert(1)
  tree.insert(4)

  expect(tree.toArray()).toEqual([3, 1, 4]) // Simple array representation
})

// Test for inorder traversal
it('should perform inorder traversal', () => {
  const tree = new BinaryTree()

  tree.insert(3)
  tree.insert(1)
  tree.insert(4)
  tree.insert(2)
  tree.insert(5)
  tree.insert(6)

  expect(tree.inorderTraversal()).toEqual([6, 2, 1, 5, 3, 4])
})

// Test for preorder traversal
it('should perform preorder traversal', () => {
  const tree = new BinaryTree()
  tree.insert(3)
  tree.insert(1)
  tree.insert(4)

  expect(tree.preorderTraversal()).toEqual([3, 1, 4])
})

// Test for postorder traversal
it('should perform postorder traversal', () => {
  const tree = new BinaryTree()
  tree.insert(3)
  tree.insert(1)
  tree.insert(4)

  expect(tree.postorderTraversal()).toEqual([1, 4, 3])
})
