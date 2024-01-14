class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}
export class PriorityQueue {
  constructor(comparator) {
    this.heap = []
    this.comparator = comparator
  }

  isEmpty() {
    return this.heap.length === 0
  }

  peek() {
    return this.heap[0].value
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
    let indexOfInsertedNode = this.heap.length - 1
    let indexOfParentNode = this.#getParentIndex(indexOfInsertedNode)

    // Make sure we're not at the root node and that the parent value is greater than the child value
    while (true && indexOfParentNode >= 0) {
      const valueOfInsertedNode = this.heap[indexOfInsertedNode]
      const valueOfParentNode = this.heap[indexOfParentNode]

      const priorityOfInsertedNode = valueOfInsertedNode.priority
      const priorityOfParentNode = valueOfParentNode.priority

      const isParentLowerPriority =
        priorityOfParentNode > priorityOfInsertedNode
      valueOfParentNode.value > valueOfInsertedNode.value

      if (isParentLowerPriority) {
        this.#swap(indexOfInsertedNode, indexOfParentNode)

        let tempIndex = indexOfParentNode
        indexOfInsertedNode = indexOfParentNode
        indexOfParentNode = this.#getParentIndex(tempIndex)

        continue
      }

      break
    }
  }

  enqueue(value, priority = value) {
    if (!value) {
      throw new Error('Invalid input')
    }

    const isObject = typeof value === 'object' && value !== null

    if (isObject && !this.comparator) {
      throw new Error('Invalid input')
    }

    const newNode = new Node(value, priority)
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
      let smallestChildIndex = currentIndex

      const hasLeftChild = leftChildIndex < this.heap.length
      const hasRightChild = rightChildIndex < this.heap.length

      if (
        hasLeftChild &&
        this.heap[leftChildIndex].priority <
          this.heap[smallestChildIndex].priority
      ) {
        smallestChildIndex = leftChildIndex
      }

      if (
        hasRightChild &&
        this.heap[rightChildIndex].priority <
          this.heap[smallestChildIndex].priority
      ) {
        smallestChildIndex = rightChildIndex
      }

      if (smallestChildIndex === currentIndex) {
        break
      }

      this.#swap(currentIndex, smallestChildIndex)
      currentIndex = smallestChildIndex
    }
  }

  size() {
    return this.heap.length
  }

  clear() {
    this.heap = []
  }

  dequeue() {
    if (this.heap.length === 1) {
      const lastNode = this.heap.pop()
      return lastNode.value
    }

    const lastItem = this.heap.pop()
    const firstItem = this.heap[0]

    this.heap[0] = lastItem
    this.#bubbleDown()

    return firstItem.value
  }

  #getIndexOfLastNonLeafNode() {
    const indexOfLastItem = this.heap.length - 1
    return this.#getParentIndex(indexOfLastItem)
  }

  heapify(array) {
    this.heap = array

    let indexOfLastNonLeafNode = this.#getIndexOfLastNonLeafNode()

    while (indexOfLastNonLeafNode >= 0) {
      this.#bubbleDown(indexOfLastNonLeafNode)
      indexOfLastNonLeafNode--
    }
  }
}
