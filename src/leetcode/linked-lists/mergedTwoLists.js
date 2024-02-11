/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4])
// Output: [1, 1, 2, 3, 4, 4]

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode()
  let tail = dummy

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }

    tail = tail.next
  }

  if (list1) {
    tail.next = list1
  } else {
    tail.next = list2
  }

  return dummy.next
}
