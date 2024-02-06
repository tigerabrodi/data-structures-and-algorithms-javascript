import { describe, it, expect } from 'vitest'
import { MyLinkedList } from './MyLinkedList'

describe('MyLinkedList', () => {
  it('initializes correctly', () => {
    const list = new MyLinkedList()
    expect(list.get(0)).toBe(-1) // List should be empty, so any get operation should return -1
  })

  it('adds at head correctly', () => {
    const list = new MyLinkedList()
    list.addAtHead(1)
    expect(list.get(0)).toBe(1) // After adding at head, the first element should be 1
    list.addAtHead(2)
    expect(list.get(0)).toBe(2) // Adding another at head, it should now be the first
    expect(list.get(1)).toBe(1) // The previous head should now be second
  })

  it('adds at tail correctly', () => {
    const list = new MyLinkedList()
    list.addAtTail(1)
    expect(list.get(0)).toBe(1) // After adding at tail, the first and only element should be 1
    list.addAtTail(2)
    expect(list.get(1)).toBe(2) // The new tail should be 2
  })

  it('adds at index correctly', () => {
    const list = new MyLinkedList()
    list.addAtIndex(0, 1) // Equivalent to addAtHead when list is empty
    list.addAtIndex(1, 3) // Adding at tail since index equals list length
    list.addAtIndex(1, 2) // Adding in the middle
    expect(list.get(0)).toBe(1)
    expect(list.get(1)).toBe(2)
    expect(list.get(2)).toBe(3)
  })

  it('gets value at index correctly', () => {
    const list = new MyLinkedList()
    list.addAtHead(1)
    list.addAtTail(2)
    expect(list.get(0)).toBe(1)
    expect(list.get(1)).toBe(2)
    expect(list.get(2)).toBe(-1) // Index out of bounds
  })

  it('deletes at index correctly', () => {
    const list = new MyLinkedList()
    list.addAtHead(1)
    list.addAtTail(2)
    list.addAtTail(3)
    list.deleteAtIndex(1) // After deletion, list should be 1->3
    expect(list.get(1)).toBe(3)
    list.deleteAtIndex(0) // After deletion, list should be 3
    expect(list.get(0)).toBe(3)
    expect(list.get(1)).toBe(-1) // Now index 1 is out of bounds
  })

  it('handles edge cases', () => {
    const list = new MyLinkedList()
    list.addAtHead(1)
    list.deleteAtIndex(0) // Delete the only element
    expect(list.get(0)).toBe(-1) // Now the list should be empty
    list.addAtTail(2)
    expect(list.get(0)).toBe(2) // The list should now have 2 as the only element
    list.addAtIndex(50, 3) // Should do nothing since index is out of bounds
    expect(list.get(1)).toBe(-1)
    list.addAtIndex(1, 3) // Should work since index is at the list's length
    expect(list.get(1)).toBe(3)
  })

  it.only('handles specific sequence of operations without error', () => {
    const list = new MyLinkedList()
    list.addAtHead(2) // List now: [2]
    list.deleteAtIndex(1) // Attempt to delete at index 1, but list only has one item. No change.
    list.addAtHead(2) // List now: [2, 2]
    list.addAtHead(7) // List now: [7, 2, 2]
    list.addAtHead(3) // List now: [3, 7, 2, 2]
    list.addAtHead(2) // List now: [2, 3, 7, 2, 2]
    list.addAtHead(5) // List now: [5, 2, 3, 7, 2, 2]
    list.addAtTail(5) // List now: [5, 2, 3, 7, 2, 2, 5]
    expect(list.get(5)).toBe(2) // Should return the value at index 5 -> 2
    list.deleteAtIndex(6) // Deletes the last item, list now: [5, 2, 3, 7, 2, 2]
    list.deleteAtIndex(4) // Deletes the item at index 4, list now: [5, 2, 3, 7, 2]

    // Let's verify the final structure and order of the list is as expected
    expect(list.get(0)).toBe(5)
    expect(list.get(1)).toBe(2)
    expect(list.get(2)).toBe(3)
    expect(list.get(3)).toBe(7)
    expect(list.get(4)).toBe(2) // This is the last valid index now
    expect(list.get(5)).toBe(-1) // Since index 5 was deleted, it should return -1
  })
})
