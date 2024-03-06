/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head
  let fast = head

  let prev = null

  while (fast && fast.next) {
    fast = fast.next.next

    let tmp = slow.next
    slow.next = prev
    prev = slow
    slow = tmp
  }

  let res = 0

  while (slow) {
    res = Math.max(res, slow.val + prev.val)
    slow = slow.next
    prev = prev.next
  }

  return res
}
