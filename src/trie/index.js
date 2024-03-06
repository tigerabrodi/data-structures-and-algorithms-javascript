class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  search(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!currentNode.children[char]) {
        return false
      }

      currentNode = currentNode.children[char]
    }

    return currentNode.isEndOfWord
  }

  startsWith(prefix) {
    let currentNode = this.root

    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i]

      if (!currentNode.children[char]) {
        return false
      }

      currentNode = currentNode.children[char]
    }

    return true
  }

  insert(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode()
      }

      currentNode = currentNode.children[char]
    }

    currentNode.isEndOfWord = true
  }
}
