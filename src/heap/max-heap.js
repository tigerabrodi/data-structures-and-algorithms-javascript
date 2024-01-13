export class MaxHeap {
  constructor() {
    this.heap = []
  }

  isEmpty() {
    return this.heap.length === 0
  }

  #swap(index1, index2) {
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  #getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  peek() {
    return this.heap[0]
  }

  #bubbleUp() {
    let indexOfInsertedNode = this.heap.length - 1
    let indexOfParentNode = this.#getParentIndex(indexOfInsertedNode)

    while (true) {
      const valueOfInsertedNode = this.heap[indexOfInsertedNode]
      const valueOfParentNode = this.heap[indexOfParentNode]

      if (valueOfParentNode < valueOfInsertedNode) {
        this.#swap(indexOfInsertedNode, indexOfParentNode)

        let tempIndex = indexOfParentNode
        indexOfInsertedNode = indexOfParentNode
        indexOfParentNode = this.#getParentIndex(tempIndex)

        continue
      }

      break
    }
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
        currentValue < leftChildValue && currentValue < rightChildValue

      if (isCurrentLessThanBothChildren) {
        if (leftChildValue > rightChildValue) {
          this.#swap(leftChildIndex, indexToBubbleDown)
          indexToBubbleDown = leftChildIndex
          continue
        }

        if (rightChildValue > leftChildValue) {
          this.#swap(rightChildIndex, indexToBubbleDown)
          indexToBubbleDown = rightChildIndex
          continue
        }
      }

      if (leftChildValue > currentValue) {
        this.#swap(leftChildIndex, indexToBubbleDown)
        indexToBubbleDown = leftChildIndex
        continue
      }

      if (rightChildValue > currentValue) {
        this.#swap(rightChildIndex, indexToBubbleDown)
        indexToBubbleDown = rightChildIndex
        continue
      }

      break
    }
  }

  remove() {
    if (this.heap.length <= 1) return this.heap.pop()

    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.#bubbleDown()

    return removedValue
  }

  insert(value) {
    this.heap.push(value)
    this.#bubbleUp()
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
