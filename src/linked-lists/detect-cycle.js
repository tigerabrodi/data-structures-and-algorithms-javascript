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

// Your task: Implement this function
export function hasCycle(list) {
  let previous = list.head
  let current = list.head

  while (current && current.next) {
    previous = previous.next
    current = current.next.next

    if (previous.value === current.value) {
      return true
    }
  }

  return false
}
