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
}
