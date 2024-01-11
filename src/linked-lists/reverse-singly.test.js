import { it, expect } from 'vitest'
import { SinglyLinkedList, reverseLinkedList } from './reverse-singly'

import { it, expect } from 'vitest'
import { SinglyLinkedList, reverseLinkedList } from './reverse-singly'

it('should reverse the singly linked list', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  reverseLinkedList(list)

  const reversedArray = []
  let current = list.head
  while (current) {
    reversedArray.push(current.value)
    current = current.next
  }

  expect(reversedArray).toEqual([3, 2, 1])
})
