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

  insert(value) {
    this.heap.push(value)
    this.#bubbleUp()
  }
}
