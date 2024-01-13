class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class CircularLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
      this.tail.next = this.head
    } else {
      newNode.next = this.head
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
  }

  prepend(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
      this.tail.next = this.head
    } else {
      this.tail.next = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  toArray() {
    if (this.head === null) return []

    const array = []
    let currentNode = this.head

    do {
      array.push(currentNode.value)
      currentNode = currentNode.next
    } while (currentNode !== this.head)

    return array
  }

  find(value) {
    if (this.head === null) return null

    let currentNode = this.head

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  insert(index, value) {
    if (this.head === null) return null
    if (index === 0) {
      this.prepend(value)
      this.length++
      return
    }

    const isIndexOutOfBounds = index < 0 || index > this.length

    if (isIndexOutOfBounds) return null

    let nodeBeforeIndexToBeInsertedAt = this.head

    for (let i = 0; i < index - 1; i++) {
      nodeBeforeIndexToBeInsertedAt = nodeBeforeIndexToBeInsertedAt.next
    }

    const newNode = new Node(value)
    newNode.next = nodeBeforeIndexToBeInsertedAt.next
    nodeBeforeIndexToBeInsertedAt.next = newNode
    this.length++
  }

  removeAt(index) {
    if (this.head === null) return null

    const isIndexOutOfBounds = index < 0 || index > this.length
    if (isIndexOutOfBounds) return null

    if (index === 0) {
      return this.removeFirst()
    }

    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }

    const removed = currentNode.next
    currentNode.next = currentNode.next.next

    if (index === this.length - 1) {
      this.tail = currentNode
    }

    this.length--
    return removed
  }

  removeFirst() {
    if (this.head === null) return null

    const removed = this.head
    this.head = this.head.next
    this.length--

    return removed
  }

  removeLast() {
    if (this.head === null) {
      return null
    }

    let tail = this.head
    let nodeBeforeTail = null

    // This loop stops at the last node as current.next will be null for the tail
    while (tail !== this.tail) {
      nodeBeforeTail = tail
      tail = tail.next
    }

    nodeBeforeTail.next = this.head
    this.tail = nodeBeforeTail
    this.length--

    return tail
  }
}
