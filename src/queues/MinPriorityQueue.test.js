import { it, expect } from 'vitest'
import { MinPriorityQueue } from './MinPriorityQueue'

// Test for creating an empty priority queue
it('should create an empty priority queue', () => {
  const pq = new MinPriorityQueue()
  expect(pq.isEmpty()).toBe(true)
})

// Test for enqueue operation
it('should enqueue elements with their priorities', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 3) // value 'NodeA' with priority 3
  pq.enqueue('NodeB', 1) // value 'NodeB' with priority 1
  pq.enqueue('NodeC', 2) // value 'NodeC' with priority 2

  expect(pq.peek()).toBe('NodeB') // The element with the highest priority
})

// Test for dequeue operation
it('should dequeue elements in priority order', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 3)
  pq.enqueue('NodeB', 1)
  pq.enqueue('NodeC', 2)

  expect(pq.dequeue()).toBe('NodeB')
  expect(pq.dequeue()).toBe('NodeC')
  expect(pq.dequeue()).toBe('NodeA')
  expect(pq.isEmpty()).toBe(true)
})

// // Test for peek operation
it('should peek at the highest priority element without removing it', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 2)
  pq.enqueue('NodeB', 1)

  expect(pq.peek()).toBe('NodeB')
  expect(pq.isEmpty()).toBe(false)
})

// // Test for priority queue size
it('should return the correct size of the priority queue', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 1)
  pq.enqueue('NodeB', 2)
  pq.enqueue('NodeC', 3)

  expect(pq.size()).toBe(3)
})

// // Test for empty queue behavior
it('should handle operations on an empty queue correctly', () => {
  const pq = new MinPriorityQueue()

  expect(pq.dequeue()).toBeNull()
  expect(pq.peek()).toBeNull()
})

// // Test for handling different data types
it('should handle different data types as values', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue(10, 2)
  pq.enqueue('Test', 3)
  pq.enqueue({ id: 1, name: 'Object' }, 1)

  expect(pq.dequeue()).toEqual({ id: 1, name: 'Object' })
  expect(pq.dequeue()).toBe(10)
  expect(pq.dequeue()).toBe('Test')
})

// // Test for handling elements with the same priority
it('should maintain order for elements with the same priority', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 1)
  pq.enqueue('NodeB', 1)

  expect(pq.dequeue()).toBe('NodeA') // As 'NodeA' was enqueued first
  expect(pq.dequeue()).toBe('NodeB')
})

// Test for updatePriority operation
it('should update the priority of an existing element', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 3)
  pq.enqueue('NodeB', 1)
  pq.enqueue('NodeC', 2)

  pq.updatePriority('NodeA', 0) // Update 'NodeA' priority to 0, making it the highest priority
  expect(pq.peek()).toBe('NodeA')
})

// Test for updatePriority operation on non-existing element
it('should not update priority if the element does not exist', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 3)
  pq.enqueue('NodeB', 1)

  pq.updatePriority('NodeC', 0) // 'NodeC' does not exist
  expect(pq.peek()).toBe('NodeB') // Priority queue remains unchanged
})

// Test for updatePriority with the same priority
it('should not change the queue if the updated priority is the same', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 1)
  pq.enqueue('NodeB', 2)

  pq.updatePriority('NodeA', 1) // Same priority for 'NodeA'
  expect(pq.peek()).toBe('NodeA')
})

// Test for updatePriority causing a reordering in the queue
it('should reorder the elements correctly when a priority is updated', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 3)
  pq.enqueue('NodeB', 1)
  pq.enqueue('NodeC', 2)

  pq.updatePriority('NodeA', 0) // 'NodeA' becomes highest priority
  expect(pq.dequeue()).toBe('NodeA')
  expect(pq.dequeue()).toBe('NodeB')
  expect(pq.dequeue()).toBe('NodeC')
})

// Test for updatePriority in a queue with multiple elements having the same priority
it('should handle updating priorities in a queue with duplicate priorities correctly', () => {
  const pq = new MinPriorityQueue()
  pq.enqueue('NodeA', 1)
  pq.enqueue('NodeB', 1)
  pq.enqueue('NodeC', 2)

  pq.updatePriority('NodeB', 0) // 'NodeB' becomes highest priority
  expect(pq.dequeue()).toBe('NodeB')
  expect(pq.dequeue()).toBe('NodeA')
  expect(pq.dequeue()).toBe('NodeC')
})
