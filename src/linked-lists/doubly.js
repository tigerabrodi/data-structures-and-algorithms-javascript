class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
      this.length++
    } else {
      const newNode = new Node(value)
      this.tail.next = newNode
      newNode.prev = this.tail
      newNode.next = null
      this.tail = newNode
      this.length++
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
      this.length++
    } else {
      const newNode = new Node(value)
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
  }

  removeLast() {
    if (this.head === null) {
      return null
    } else if (this.head.value === this.tail.value) {
      const removed = this.tail
      this.head = null
      this.tail = null
      this.length--
      return removed
    } else {
      const removed = this.tail
      this.tail.prev.next = null
      this.tail = this.tail.prev
      this.length--

      return removed
    }
  }

  removeFirst() {
    if (this.head === null) {
      return null
    } else if (this.head.value === this.tail.value) {
      const removed = this.tail
      this.head = null
      this.tail = null
      this.length--
      return removed
    } else {
      const removed = this.head
      this.head.next.prev = null
      this.head = this.head.next
      this.length--

      return removed
    }
  }

  insert(index, value) {
    if (this.head === null) {
      return null
    }

    const isIndexOutOfBounds = index < 0 || index > this.length

    if (isIndexOutOfBounds) {
      return null
    }

    let nodeBeforeIndex = this.head
    for (let i = 0; i < index - 1; i++) {
      nodeBeforeIndex = nodeBeforeIndex.next
    }

    const newNode = new Node(value)

    nodeBeforeIndex.next.prev = newNode
    newNode.next = nodeBeforeIndex.next.prev

    nodeBeforeIndex.next = newNode
    newNode.prev = nodeBeforeIndex

    this.length++
  }

  removeAt(index) {
    if (this.head === null) {
      return null
    }

    const isIndexOutOfBounds = index < 0 || index > this.length

    if (isIndexOutOfBounds) {
      return null
    }

    let nodeBeforeIndex = this.head
    for (let i = 0; i < index - 1; i++) {
      nodeBeforeIndex = nodeBeforeIndex.next
    }

    const removed = nodeBeforeIndex.next

    nodeBeforeIndex.next.next.prev = nodeBeforeIndex
    nodeBeforeIndex.next = nodeBeforeIndex.next.next

    this.length--
    return removed
  }
}
