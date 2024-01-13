import { it, expect } from 'vitest'
import { CircularLinkedList } from './circular-linked-lists'

// Test for creating a new circular linked list
it.only('should create an empty circular linked list', () => {
  const list = new CircularLinkedList()
  expect(list).toBeDefined()
  expect(list.isEmpty()).toBe(true)
})

// Test for appending elements
it('should append elements correctly', () => {
  const list = new CircularLinkedList()
  list.append(1)
  list.append(2)

  expect(list.toArray()).toEqual([1, 2])
  expect(list.tail.next.value).toBe(list.head.value) // Tail should point to head
})

// Test for prepending elements
it('should prepend elements correctly', () => {
  const list = new CircularLinkedList()
  list.prepend(1)
  list.prepend(2)

  expect(list.toArray()).toEqual([2, 1])
  expect(list.tail.next.value).toBe(list.head.value) // Tail should point to head
})

// Test for removing elements
it('should remove elements correctly', () => {
  const list = new CircularLinkedList()
  list.append(1)
  list.append(2)
  list.append(3)
  list.removeAt(1) // Remove '2'

  expect(list.toArray()).toEqual([1, 3])
  expect(list.tail.next.value).toBe(list.head.value) // Tail should point to head
})

// Test to ensure circular nature
it('should retain circular structure after operations', () => {
  const list = new CircularLinkedList()
  list.append(1)
  list.append(2)
  list.removeLast()
  list.prepend(3)

  expect(list.toArray()).toEqual([3, 1])
  expect(list.tail.next.value).toBe(list.head.value) // Tail should point to head
})
