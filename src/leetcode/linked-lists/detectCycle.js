var detectCycle = function (head) {
  let slow = head,
    fast = head,
    pointer = head

  // this uses the two pointer approach to detect a cycle in a linked list
  // the fast pointer moves twice as fast as the slow pointer
  // if there is a cycle, the two pointers will meet at some point
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      // there is a cycle
      // we need to find the start of the cycle
      // we do so by moving the pointer to the head of the list
      // and moving the pointer and the slow pointer at the same pace
      // the point at which they meet is the start of the cycle
      // this is because the distance from the head to the start of the cycle
      // is the same as the distance from the point at which the two pointers meet
      while (pointer !== slow) {
        pointer = pointer.next
        slow = slow.next
      }
      return pointer
    }
  }
  return null
}
