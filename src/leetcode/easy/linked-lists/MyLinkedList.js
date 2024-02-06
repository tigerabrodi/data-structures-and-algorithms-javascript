class Node {
  constructor(value) {
    this.val = value
    this.next = null
    this.prev = null
  }
}

export class MyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
    this.tail = null
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let currentIndex = 0
    let currentNode = this.head

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode.val
      }

      currentIndex++
      currentNode = currentNode.next
    }

    return -1
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const newNode = new Node(val)
    this.length++

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val)
      return
    }

    this.length++
    const newNode = new Node(val)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val)
      return
    }

    const newNode = new Node(val)
    let currentNode = this.head
    let currentIndex = 0

    while (currentNode) {
      if (currentIndex + 1 === index) {
        if (currentNode.next === null) {
          this.addAtTail(val)
        } else {
          this.length++
          newNode.next = currentNode.next
          newNode.prev = currentNode
          currentNode.next.prev = newNode
          currentNode.next = newNode
        }
        return
      }

      currentNode = currentNode.next
      currentIndex++
    }
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    const isIndexOutOfBounds = index < 0 || index >= this.length
    if (isIndexOutOfBounds) {
      return -1
    }

    if (index === 0) {
      this.head = this.head.next
      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }

      this.length--
      return
    }

    let currentNode = this.head
    let currentIndex = 0

    while (currentNode) {
      // this is the node before the one we want to delete
      if (currentIndex + 1 === index) {
        // if the node we want to delete is the tail
        // then next of tail should be null
        // because currentNode.next is the tail
        const shouldDeleteTail = currentNode.next.next === null
        if (shouldDeleteTail) {
          currentNode.next = null
          this.tail = currentNode
          this.length--
          return
        } else {
          currentNode.next = currentNode.next.next
          currentNode.next.prev = currentNode
          this.length--
          return
        }
      }

      currentIndex++
      currentNode = currentNode.next
    }
  }
}
