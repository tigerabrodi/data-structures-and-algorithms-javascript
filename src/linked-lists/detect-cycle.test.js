import { it, expect } from 'vitest'
import { SinglyLinkedList, hasCycle } from './detect-cycle'

it('should detect a cycle in the linked list', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  // Manually create a cycle for testing
  let current = list.head
  while (current.next) {
    current = current.next
  }
  // Creating a cycle by pointing the last node to the head
  current.next = list.head

  expect(hasCycle(list)).toBe(true)
})

it('should return false for a linked list without a cycle', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  expect(hasCycle(list)).toBe(false)
})
