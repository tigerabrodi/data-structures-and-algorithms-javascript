import { it, expect } from 'vitest'
import { PriorityQueue } from './PriorityQueue'

// Test for creating an empty priority queue
it('should create an empty priority queue', () => {
  const pq = new PriorityQueue()
  expect(pq.isEmpty()).toBe(true)
})

// Test for enqueue operation
it.only('should enqueue elements in priority order', () => {
  const pq = new PriorityQueue()
  pq.enqueue(3)
  pq.enqueue(1)
  pq.enqueue(2)

  expect(pq.peek()).toBe(1) // The smallest element (highest priority) should be at the front
})

// Test for dequeue operation
it('should dequeue elements in priority order', () => {
  const pq = new PriorityQueue()
  pq.enqueue(3)
  pq.enqueue(1)
  pq.enqueue(2)

  expect(pq.dequeue()).toBe(1) // Remove the element with the highest priority
  expect(pq.dequeue()).toBe(2) // Next highest priority
  expect(pq.dequeue()).toBe(3) // Last element
  expect(pq.isEmpty()).toBe(true)
})

// Test for peek operation
it('should peek at the highest priority element without removing it', () => {
  const pq = new PriorityQueue()
  pq.enqueue(3)
  pq.enqueue(1)

  expect(pq.peek()).toBe(1) // Peek at the highest priority
  expect(pq.isEmpty()).toBe(false) // Queue should still contain the elements
})

// Test for priority queue size
it('should return the correct size of the priority queue', () => {
  const pq = new PriorityQueue()
  pq.enqueue(5)
  pq.enqueue(10)
  pq.enqueue(15)

  expect(pq.size()).toBe(3) // The size should reflect the number of elements enqueued
})

// Test for handling different priorities
it('should handle different priorities correctly', () => {
  const pq = new PriorityQueue()
  pq.enqueue(5, 2) // Value 5 with priority 2
  pq.enqueue(10, 1) // Value 10 with priority 1 (higher priority)
  pq.enqueue(15, 3) // Value 15 with priority 3

  expect(pq.dequeue()).toBe(10) // Highest priority (lowest number)
  expect(pq.dequeue()).toBe(5) // Next highest priority
  expect(pq.dequeue()).toBe(15) // Last in priority
})

// Test for maintaining order with same priority
it('should maintain order for elements with the same priority', () => {
  const pq = new PriorityQueue()
  pq.enqueue(5, 1)
  pq.enqueue(10, 1) // Same priority as 5

  expect(pq.dequeue()).toBe(5) // 5 was enqueued first, so it should come out first
  expect(pq.dequeue()).toBe(10)
})

// Test for clearing the priority queue
it('should clear the priority queue', () => {
  const pq = new PriorityQueue()
  pq.enqueue(10)
  pq.enqueue(20)
  pq.clear()

  expect(pq.isEmpty()).toBe(true)
})

// Test for handling complex data types
it('should handle objects with a comparator', () => {
  const pq = new PriorityQueue((a, b) => a.priority - b.priority)
  pq.enqueue({ item: 'Task 1', priority: 2 })
  pq.enqueue({ item: 'Task 2', priority: 1 })

  expect(pq.dequeue().item).toBe('Task 2') // Higher priority task comes out first
  expect(pq.dequeue().item).toBe('Task 1')
})

import { it, expect } from 'vitest'
import { PriorityQueue } from './PriorityQueue'

// Test for using the value as priority if not provided
it('should use the value as priority if not provided', () => {
  const pq = new PriorityQueue()
  pq.enqueue(5) // Assuming default priority is the value itself
  pq.enqueue(3)
  pq.enqueue(4)

  expect(pq.dequeue()).toBe(3) // The smallest element should come out first
})

// Test for handling invalid inputs
it('should throw an error for invalid inputs', () => {
  const pq = new PriorityQueue()
  expect(() => pq.enqueue(null)).toThrow('Invalid input') // Assuming null is invalid
  expect(() => pq.enqueue(undefined)).toThrow('Invalid input')
  expect(() => pq.enqueue({})).toThrow('Invalid input') // Objects without a comparator
})

// Test for dequeuing from an empty queue
it('should return null when dequeue is called on an empty queue', () => {
  const pq = new PriorityQueue()
  expect(pq.dequeue()).toBeNull() // Assuming the return is null for an empty queue
})

// Test for handling negative priorities
it('should handle negative priorities correctly', () => {
  const pq = new PriorityQueue()
  pq.enqueue(5, -1)
  pq.enqueue(3, -2)
  pq.enqueue(4, -3)

  expect(pq.dequeue()).toBe(4) // The element with the most negative priority comes out first
})

// Test for stability in equal priorities
it('should maintain order for elements with the same priority', () => {
  const pq = new PriorityQueue()
  pq.enqueue('task1', 1)
  pq.enqueue('task2', 1)
  pq.enqueue('task3', 1)

  expect(pq.dequeue()).toBe('task1') // 'task1' was enqueued first
  expect(pq.dequeue()).toBe('task2') // Followed by 'task2'
  expect(pq.dequeue()).toBe('task3') // Lastly, 'task3'
})

// Test for dynamic priority updates (if applicable)
it('should update the order when priorities are changed', () => {
  const pq = new PriorityQueue()
  pq.enqueue('task1', 3)
  pq.updatePriority('task1', 1) // Assuming a method to update priority exists

  expect(pq.peek()).toBe('task1') // 'task1' should now be at the front due to updated priority
})
