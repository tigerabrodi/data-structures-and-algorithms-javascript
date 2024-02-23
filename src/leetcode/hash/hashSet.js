class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

var MyHashSet = function () {
  this.size = 1000
  this.length = 0
  this.hashSet = Array.from({ length: this.size }, () => new Node(0))
}

MyHashSet.prototype.hash = function (key) {
  return key % this.hashSet.length
}

MyHashSet.prototype.rehash = function (key) {
  const oldSet = this.hashSet
  this.size *= 2
  this.length = 0
  this.hashSet = Array.from({ length: this.size }, () => new Node(0))

  for (let i = 0; i < oldSet.length; i++) {
    let cur = oldSet[i].next
    while (cur) {
      this.add(cur.value)
      cur = cur.next
    }
  }
}

MyHashSet.prototype.add = function (key) {
  if (this.size / 2 === this.length) {
    this.rehash()
  }

  const index = this.hash(key)
  const newNode = new Node(key)

  let cur = this.hashSet[index]

  while (cur.next) {
    if (cur.next.value === key) return
    cur = cur.next
  }

  this.length++
  cur.next = newNode
}

MyHashSet.prototype.remove = function (key) {
  const index = this.hash(key)
  let cur = this.hashSet[index]

  while (cur.next) {
    if (cur.next.value === key) {
      cur.next = cur.next.next
      this.length--
      return
    }

    cur = cur.next
  }
}

MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key)
  let cur = this.hashSet[index]

  while (cur.next) {
    if (cur.next.value === key) {
      return true
    }

    cur = cur.next
  }

  return false
}
