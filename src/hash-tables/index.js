import { SinglyLinkedList } from './linked-list'

export class HashTable {
  constructor(size = 50) {
    // new arrays of null values
    this.data = new Array(size)
  }

  #hashKeyViaASCII(key) {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    return hash
  }

  #turnHashToIndex(hash) {
    return hash % this.data.length
  }

  get(key) {
    const hashedKey = this.#hashKeyViaASCII(key)
    const index = this.#turnHashToIndex(hashedKey)
    const bucket = this.data[index]
    if (!bucket) return null

    const isOnlyOneItemInBucket = bucket.length === 1
    if (isOnlyOneItemInBucket && bucket.head.key === key) {
      return bucket.head.value
    }

    let currentNode = bucket.head

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value
      }

      currentNode = currentNode.next
    }

    return null
  }

  set(key, value) {
    const hashedKey = this.#hashKeyViaASCII(key)
    const index = this.#turnHashToIndex(hashedKey)
    const bucket = this.data[index]

    if (bucket) {
      bucket.append({ key, value })
    } else {
      const newLinkedList = new SinglyLinkedList()
      newLinkedList.append({ key, value })
      this.data[index] = newLinkedList
    }
  }
}
