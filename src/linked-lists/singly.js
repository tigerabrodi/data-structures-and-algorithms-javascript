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
}
