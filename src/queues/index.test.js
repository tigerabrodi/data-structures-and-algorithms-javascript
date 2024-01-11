import { it, expect } from 'vitest'
import { Queue } from '.'

it('should enqueue, peek, dequeue values', () => {
  const queue = new Queue()

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  expect(queue.peek()).toBe(1)
  expect(queue.dequeue()).toBe(1)
  expect(queue.dequeue()).toBe(2)
  expect(queue.dequeue()).toBe(3)
  expect(queue.dequeue()).toBeUndefined()
})
