class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

var LRUCache = function (capacity) {
  this.cache = {}
  this.cap = capacity
  this.length = 0
  this.left = new Node(0, 0) // Sentinel node for head
  this.right = new Node(0, 0) // Sentinel node for tail
  this.left.next = this.right
  this.right.prev = this.left

  // Inserts node at the right (Most Recently Used side)
  this.insert = function (node) {
    const prev = this.right.prev
    const next = this.right

    prev.next = node
    node.prev = prev

    node.next = next
    next.prev = node
    this.length++ // Increment length when a node is added
  }

  // Removes node from the list
  this.remove = function (node) {
    const prev = node.prev
    const next = node.next

    prev.next = next
    next.prev = prev

    this.length-- // Decrement length when a node is removed
  }
}

LRUCache.prototype.get = function (key) {
  if (this.cache[key] !== undefined) {
    this.remove(this.cache[key])
    this.insert(this.cache[key])
    return this.cache[key].value
  }

  return -1
}

LRUCache.prototype.put = function (key, value) {
  if (this.cache[key] !== undefined) {
    this.remove(this.cache[key])
  } else {
    if (this.cap === this.length) {
      const lru = this.left.next
      this.remove(lru)
      delete this.cache[lru.key]
    }
  }

  const newNode = new Node(key, value)
  this.insert(newNode)
  this.cache[key] = newNode
}
