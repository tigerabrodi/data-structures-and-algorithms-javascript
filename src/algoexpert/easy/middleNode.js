function middleNode(linkedList) {
  let current = linkedList
  let jumper = linkedList

  while (jumper && jumper.next) {
    current = current.next
    jumper = jumper.next.next
  }

  return current
}
