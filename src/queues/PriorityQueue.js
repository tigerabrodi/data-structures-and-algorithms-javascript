import { MinHeap } from '../heap/min-heap'

export class PriorityQueue {
  constructor() {
    this.heap = new MinHeap()
  }

  isEmpty() {
    return this.heap.isEmpty()
  }
}
