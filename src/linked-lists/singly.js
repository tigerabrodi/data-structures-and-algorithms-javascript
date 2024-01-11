// Singly Linked List: Node: value, next
// Singly Linked List: Head, Tail, Length
// Node -> Node -> Node

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      this.tail.next = new Node(value)
    }

    this.length++
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      const node = new Node(value)
      node.next = this.head
      this.head = node
    }

    this.length++
  }

  removeLast() {
    if (this.head === null) {
      return null
    }

    let current = this.head
    let previous = null

    // This loop stops at the last node as current.next will be null for the tail
    while (current.next !== null) {
      previous = current
      current = current.next
    }

    previous.next = null
    this.tail = previous
    this.length--

    return current
  }
}
