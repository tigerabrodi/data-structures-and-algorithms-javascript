class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }
}

export function reverseLinkedList(list) {
  let prevNode = null
  let currentNode = list.head

  while (currentNode) {
    const nextNode = currentNode.next
    currentNode.next = prevNode

    prevNode = currentNode
    currentNode = nextNode
  }

  list.head = prevNode
}
