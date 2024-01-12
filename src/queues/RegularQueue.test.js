import { it, expect } from 'vitest'
import { Queue } from './RegularQueue'

it('should enqueue, peek, dequeue, size, isEmpty', () => {
  const queue = new Queue()

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  expect(queue.peek()).toBe(1)
  expect(queue.dequeue()).toBe(1)
  expect(queue.dequeue()).toBe(2)
  expect(queue.dequeue()).toBe(3)
  expect(queue.dequeue()).toBeUndefined()

  expect(queue.size()).toBe(0)
  expect(queue.isEmpty()).toBe(true)
})
