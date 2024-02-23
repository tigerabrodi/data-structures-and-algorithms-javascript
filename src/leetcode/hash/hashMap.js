class Node {
  constructor(key, value) {
    this.value = value
    this.key = key
    this.next = null
  }
}

var MyHashMap = function () {
  this.size = 1000
  this.length = 0
  this.hashSet = Array.from({ length: this.size }, () => new Node(0, 0))
}

MyHashMap.prototype.hash = function (key) {
  return key % this.hashSet.length
}

MyHashMap.prototype.rehash = function (key) {
  const oldSet = this.hashSet
  this.size *= 2
  this.length = 0
  this.hashSet = Array.from({ length: this.size }, () => new Node(0, 0))

  for (let i = 0; i < oldSet.length; i++) {
    let cur = oldSet[i].next
    while (cur) {
      this.put(cur.key, cur.value)
      cur = cur.next
    }
  }
}

MyHashMap.prototype.put = function (key, value) {
  if (this.size / 2 === this.length) {
    this.rehash()
  }

  const index = this.hash(key)
  const newNode = new Node(key, value)

  let cur = this.hashSet[index]

  while (cur.next) {
    if (cur.next.key === key) {
      cur.next.value = value
      return
    }
    cur = cur.next
  }

  this.length++
  cur.next = newNode
}

MyHashMap.prototype.remove = function (key) {
  const index = this.hash(key)
  let cur = this.hashSet[index]

  while (cur.next) {
    if (cur.next.key === key) {
      cur.next = cur.next.next
      this.length--
      return
    }

    cur = cur.next
  }
}

MyHashMap.prototype.get = function (key) {
  const index = this.hash(key)
  let cur = this.hashSet[index]

  while (cur.next) {
    if (cur.next.key === key) {
      return cur.next.value
    }

    cur = cur.next
  }

  return -1
}
