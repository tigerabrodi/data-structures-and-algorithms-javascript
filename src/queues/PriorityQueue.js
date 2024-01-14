import { MinHeap } from '../heap/min-heap'

// Priority Queue that uses a MinHeap because the smallest element has the highest priority
export class PriorityQueue {
  constructor() {
    this.heap = new MinHeap()
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  peek() {
    return this.heap.peek()
  }

  enqueue(value) {
    this.heap.insert(value)
  }

  dequeue() {
    return this.heap.remove()
  }
}
