import { it, expect } from 'vitest'
import { BinarySearchTree } from './binary-search-tree'

// Test for creating a new binary search tree
it('should create an empty binary search tree', () => {
  const bst = new BinarySearchTree()
  expect(bst).toBeDefined()
  expect(bst.isEmpty()).toBe(true)
})

// Test for inserting elements
it('should insert elements and maintain BST properties', () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)

  expect(bst.find(5).left.value).toBe(3)
  expect(bst.find(5).right.value).toBe(7)
  expect(bst.find(10).right.value).toBe(15)
})

// Test for finding elements
it('should find elements in the BST', () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)

  expect(bst.find(10).value).toBe(10)
  expect(bst.find(5).value).toBe(5)
  expect(bst.find(15).value).toBe(15)
  expect(bst.find(20)).toBeNull()
})

// Test for deleting a leaf node (no children)
it('should delete a leaf node correctly', () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.delete(15)

  expect(bst.find(15)).toBeNull()
  expect(bst.find(10).right).toBeNull()
})

// Test for deleting a node with only a left child
it('should delete a node with only a left child correctly', () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(3)
  bst.delete(5)

  expect(bst.find(5)).toBeNull()
  expect(bst.find(10).left.value).toBe(3)
})

// Test for deleting a node with only a right child
it('should delete a node with only a right child correctly', () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(15)
  bst.insert(20)
  bst.delete(15)

  expect(bst.find(15)).toBeNull()
  expect(bst.find(10).right.value).toBe(20)
})

// Test for deleting a node with two children
it('should delete a node with two children correctly', () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  bst.insert(12)
  bst.insert(17)
  bst.delete(15)

  // Check the successor of 15 (in this case, 17) has replaced 15
  expect(bst.find(15)).toBeNull()
  expect(bst.find(10).right.value).not.toBe(15)

  // Further checks can be added to ensure the structure of the tree
})
