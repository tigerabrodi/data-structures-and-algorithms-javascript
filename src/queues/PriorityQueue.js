import { MinHeap } from '../heap/min-heap'

class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}
export class PriorityQueue {
  constructor() {
    this.heap = []
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

      console.log({
        valueOfInsertedNode,
        valueOfParentNode,
        indexOfParentNode,
        indexOfInsertedNode,
      })

      const priorityOfInsertedNode = valueOfInsertedNode.priority
      const priorityOfParentNode = valueOfParentNode.priority

      const isParentHigherPriority =
        priorityOfParentNode > priorityOfInsertedNode
      const isParentEqualPriority =
        priorityOfParentNode === priorityOfInsertedNode
      const isParentValueGreaterThanInsertedValue =
        valueOfParentNode.value > valueOfInsertedNode.value

      if (
        isParentHigherPriority ||
        (isParentEqualPriority && isParentValueGreaterThanInsertedValue)
      ) {
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

  #bubbleDown(indexToBubbleDown = 0) {
    while (true) {
      const leftChildIndex = this.#getLeftChildIndex(indexToBubbleDown)
      const rightChildIndex = this.#getRightChildIndex(indexToBubbleDown)

      const currentValue = this.heap[indexToBubbleDown]
      const leftChildValue = this.heap[leftChildIndex]
      const rightChildValue = this.heap[rightChildIndex]

      const isCurrentLessThanBothChildren =
        currentValue.priority < leftChildValue.priority &&
        currentValue.priority < rightChildValue.priority

      if (isCurrentLessThanBothChildren) {
        if (leftChildValue.priority > rightChildValue.priority) {
          this.#swap(leftChildIndex, indexToBubbleDown)
          indexToBubbleDown = leftChildIndex
          continue
        }

        if (rightChildValue.priority > leftChildValue.priority) {
          this.#swap(rightChildIndex, indexToBubbleDown)
          indexToBubbleDown = rightChildIndex
          continue
        }
      }

      if (leftChildValue.priority > currentValue.priority) {
        this.#swap(leftChildIndex, indexToBubbleDown)
        indexToBubbleDown = leftChildIndex
        continue
      }

      if (rightChildValue.priority > currentValue.priority) {
        this.#swap(rightChildIndex, indexToBubbleDown)
        indexToBubbleDown = rightChildIndex
        continue
      }

      break
    }
  }

  size() {
    return this.heap.length
  }

  dequeue() {
    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const lastItem = this.heap.pop()
    const firstItem = this.heap[0]

    this.heap[0] = lastItem
    this.#bubbleDown()

    return firstItem
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
