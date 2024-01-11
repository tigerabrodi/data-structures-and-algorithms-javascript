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

// Floyd's Tortoise and Hare Algorithm
// Time complexity: O(n)
// It's designed to detect a cycle in a linked list
export function hasCycle(list) {
  let slow = list.head
  let fast = list.head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow.value === fast.value) {
      return true
    }
  }

  return false
}
