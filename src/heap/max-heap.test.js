import { it, expect } from 'vitest'
import { MaxHeap } from './max-heap'

// Test for creating a new max heap
it.only('should create an empty max heap', () => {
  const maxHeap = new MaxHeap()
  expect(maxHeap).toBeDefined()
  expect(maxHeap.isEmpty()).toBe(true)
})

// Test for inserting elements
it('should insert elements and maintain max heap property', () => {
  const maxHeap = new MaxHeap()
  maxHeap.insert(3)
  maxHeap.insert(6)
  maxHeap.insert(1)

  expect(maxHeap.peek()).toBe(6) // Max element at the root
})

// Test for removing the root element
it('should remove the root element and maintain max heap property', () => {
  const maxHeap = new MaxHeap()
  maxHeap.insert(3)
  maxHeap.insert(6)
  maxHeap.insert(1)
  expect(maxHeap.remove()).toBe(6) // Remove max element
  expect(maxHeap.peek()).toBe(3) // Next max element at the root
})

// Test for heapify
it('should correctly heapify an array', () => {
  const maxHeap = new MaxHeap()
  maxHeap.heapify([3, 6, 1])
  expect(maxHeap.peek()).toBe(6) // Max element at the root
})
