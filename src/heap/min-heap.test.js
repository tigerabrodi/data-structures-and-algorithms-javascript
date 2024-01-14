import { it, expect } from 'vitest'
import { MinHeap } from './min-heap'

// Test for creating a new min heap
it('should create an empty min heap', () => {
  const minHeap = new MinHeap()
  expect(minHeap).toBeDefined()
  expect(minHeap.isEmpty()).toBe(true)
})

// Test for inserting elements
it('should insert elements and maintain min heap property', () => {
  const minHeap = new MinHeap()
  minHeap.insert(3)
  minHeap.insert(1)
  minHeap.insert(6)

  expect(minHeap.peek()).toBe(1)
})

// Test for removing the root element
it('should remove the root element and maintain min heap property', () => {
  const minHeap = new MinHeap()
  minHeap.insert(3)
  minHeap.insert(1)
  minHeap.insert(6)
  expect(minHeap.remove()).toBe(1)
  expect(minHeap.peek()).toBe(3)
})

it('should remove elements in priority order', () => {
  const minHeap = new MinHeap()
  minHeap.insert(3)
  minHeap.insert(1)
  minHeap.insert(2)

  expect(minHeap.remove()).toBe(1)
  expect(minHeap.remove()).toBe(2)
  expect(minHeap.remove()).toBe(3)
  expect(minHeap.isEmpty()).toBe(true)
})

// Test for heapify
it('should correctly heapify an array', () => {
  const minHeap = new MinHeap()
  minHeap.heapify([3, 1, 6])
  expect(minHeap.peek()).toBe(1)
})

it('should spit out size of heap', () => {
  const minHeap = new MinHeap()
  minHeap.insert(3)
  minHeap.insert(1)
  minHeap.insert(6)
  expect(minHeap.size()).toBe(3)
})
