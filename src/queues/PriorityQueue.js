class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

export class PriorityQueue {
  constructor(
    comparator = (a, b) => a.priority - b.priority,
    valueExtractor = (node) => node.value
  ) {
    this.heap = []
    this.comparator = comparator
    this.valueExtractor = valueExtractor
  }

  isEmpty() {
    return this.heap.length === 0
  }

  peek() {
    return this.isEmpty() ? null : this.valueExtractor(this.heap[0])
  }

  #swap(index1, index2) {
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  #getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  #bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = this.#getParentIndex(index)
      if (this.comparator(this.heap[index], this.heap[parentIndex]) < 0) {
        this.#swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  enqueue(value, priority = value) {
    if (value == null) {
      throw new Error('Invalid input')
    }

    const effectivePriority =
      typeof value === 'object' ? value.priority : priority

    const newNode = new Node(value, effectivePriority)
    this.heap.push(newNode)
    this.#bubbleUp()
  }

  #getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }

  #getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2
  }

  #bubbleDown() {
    let currentIndex = 0

    while (true) {
      const leftChildIndex = this.#getLeftChildIndex(currentIndex)
      const rightChildIndex = this.#getRightChildIndex(currentIndex)
      let smallest = currentIndex

      if (
        leftChildIndex < this.heap.length &&
        this.comparator(this.heap[leftChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftChildIndex
      }

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightChildIndex
      }

      if (smallest !== currentIndex) {
        this.#swap(currentIndex, smallest)
        currentIndex = smallest
      } else {
        break
      }
    }
  }

  size() {
    return this.heap.length
  }

  clear() {
    this.heap = []
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    const firstItem = this.heap[0]
    const lastItem = this.heap.pop()

    if (!this.isEmpty()) {
      this.heap[0] = lastItem
      this.#bubbleDown()
    }

    return this.valueExtractor(firstItem)
  }
}
