// We're using arrays here for convenience, but this is not the best data structure for this purpose.
// Linked Lists are better for Queues.
export class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift()
  }

  peek() {
    return this.queue[0]
  }

  size() {
    return this.queue.length
  }

  isEmpty() {
    return this.size() === 0
  }
}
