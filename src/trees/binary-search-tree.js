class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value, currentNode = this.root) {
    if (!currentNode) {
      const newNode = new Node(value)
      if (!this.root) {
        this.root = newNode
      }
      return newNode
    }

    if (value > currentNode.value) {
      currentNode.right = this.insert(value, currentNode.right)
    } else {
      currentNode.left = this.insert(value, currentNode.left)
    }

    return currentNode
  }

  find(value, currentNode = this.root) {
    if (!currentNode) {
      return null
    }

    if (currentNode.value === value) {
      return currentNode
    }

    if (value > currentNode.value) {
      return this.find(value, currentNode.right)
    } else {
      return this.find(value, currentNode.left)
    }
  }

  delete(value, currentNode = this.root) {
    if (!currentNode) {
      return currentNode
    }

    if (value > currentNode.value) {
      currentNode.right = this.delete(value, currentNode.right)
    } else if (value < currentNode.value) {
      currentNode.left = this.delete(value, currentNode.left)
    } else {
      if (!currentNode.left) {
        return currentNode.right
      } else if (currentNode.right) {
        return currentNode.left
      }

      let minFromRightSubTree = currentNode

      while (minFromRightSubTree.left) {
        minFromRightSubTree = minFromRightSubTree.left
      }

      currentNode.value = minFromRightSubTree.value
      currentNode.right = this.delete(
        minFromRightSubTree.value,
        currentNode.right
      )
    }

    return currentNode
  }
}
