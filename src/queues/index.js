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
}
