import { it, expect } from 'vitest'
import { SinglyLinkedList } from './singly'

import { it, expect } from 'vitest'
import { SinglyLinkedList } from './singly'

// Test for creating a new list
it('should create a new list', () => {
  const list = new SinglyLinkedList()
  expect(list.head).toBe(null)
  expect(list.tail).toBe(null)
  expect(list.length).toBe(0)
})

// Test for appending an element
it('should append an element to the list', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  expect(list.head.value).toBe(1)
  expect(list.tail.value).toBe(1)
  expect(list.length).toBe(1)
})

// Test for prepending an element
it('should prepend an element to the list', () => {
  const list = new SinglyLinkedList()
  list.prepend(1)
  expect(list.head.value).toBe(1)
  expect(list.tail.value).toBe(1)
  expect(list.length).toBe(1)
  list.prepend(0)
  expect(list.head.value).toBe(0)
  expect(list.tail.value).toBe(1)
  expect(list.length).toBe(2)
})

// Test for removing an element from the end
it('should remove an element from the end of the list', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  const removed = list.removeLast()
  expect(removed.value).toBe(2)
  expect(list.tail.value).toBe(1)
  expect(list.length).toBe(1)
})

// Test for removing an element from the beginning
it('should remove an element from the beginning of the list', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  const removed = list.removeFirst()
  expect(removed.value).toBe(1)
  expect(list.head.value).toBe(2)
  expect(list.length).toBe(1)
})

// Test for inserting an element at a specific index
it('should insert an element at a specific index', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(3)
  list.insert(1, 2) // Inserting 2 at index 1
  expect(list.head.next.value).toBe(2)
  expect(list.length).toBe(3)
})

// Test for removing an element by index
it.only('should remove an element by index', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  list.append(3)
  const removed = list.removeAt(1) // Removing element at index 1
  expect(removed.value).toBe(2)
  expect(list.length).toBe(2)
})

// Test for finding an element
it('should find an element in the list', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  list.append(3)
  const found = list.find(2)
  expect(found.value).toBe(2)
})

// Test for finding an element that does not exist
it('should not find an element that does not exist', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  const found = list.find(3)
  expect(found).toBe(null)
})

// Test for converting the list to an array
it('should convert the list to an array', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  list.append(3)
  const array = list.toArray()
  expect(array).toEqual([1, 2, 3])
})

// Test for clearing the list
it('should clear the list', () => {
  const list = new SinglyLinkedList()
  list.append(1)
  list.append(2)
  list.clear()
  expect(list.head).toBe(null)
  expect(list.tail).toBe(null)
  expect(list.length).toBe(0)
})
