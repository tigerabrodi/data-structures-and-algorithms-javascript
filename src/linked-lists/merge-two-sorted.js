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

export function mergeSortedLists(list1, list2) {
  let mergedList = new SinglyLinkedList()

  let firstHead = list1.head
  let secondHead = list2.head

  if (!firstHead) return list2
  if (!secondHead) return list1

  while (firstHead !== null && secondHead !== null) {
    if (firstHead.value < secondHead.value) {
      mergedList.append(firstHead.value)
      firstHead = firstHead.next
    } else {
      mergedList.append(secondHead.value)
      secondHead = secondHead.next
    }
  }

  // Append remaining elements of the first list, if any
  while (firstHead !== null) {
    mergedList.append(firstHead.value)
    firstHead = firstHead.next
  }

  // Append remaining elements of the second list, if any
  while (secondHead !== null) {
    mergedList.append(secondHead.value)
    secondHead = secondHead.next
  }

  return mergedList
}
