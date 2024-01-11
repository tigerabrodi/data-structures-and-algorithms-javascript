import { it, expect } from 'vitest'
import { SinglyLinkedList, mergeSortedLists } from './merge-two-sorted'

// Helper function to convert a linked list to an array for easy comparison
function linkedListToArray(linkedList) {
  const array = []
  let current = linkedList.head
  while (current) {
    array.push(current.value)
    current = current.next
  }
  return array
}

it('should merge two sorted lists into one sorted list', () => {
  const list1 = new SinglyLinkedList()
  list1.append(1)
  list1.append(3)
  list1.append(5)

  const list2 = new SinglyLinkedList()
  list2.append(2)
  list2.append(4)
  list2.append(6)

  const mergedList = mergeSortedLists(list1, list2)
  expect(linkedListToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 6])
})

it('should handle one empty list correctly', () => {
  const list1 = new SinglyLinkedList()
  const list2 = new SinglyLinkedList()
  list2.append(1)
  list2.append(3)
  list2.append(5)

  const mergedList = mergeSortedLists(list1, list2)
  expect(linkedListToArray(mergedList)).toEqual([1, 3, 5])
})

it('should handle both empty lists correctly', () => {
  const list1 = new SinglyLinkedList()
  const list2 = new SinglyLinkedList()

  const mergedList = mergeSortedLists(list1, list2)
  expect(linkedListToArray(mergedList)).toEqual([])
})
