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

  delete(value) {
    let previousNode = null
    let direction = 'left'
    let currentNode = this.root

    while (true) {
      if (value === currentNode.value) {
        const hasTwoChildren = currentNode.left && currentNode.right
        const hasOnlyLeftChild = currentNode.left && !currentNode.right
        const hasOnlyRightChild = currentNode.right && !currentNode.left

        if (hasTwoChildren) {
        }
        if (hasOnlyLeftChild) {
          previousNode[direction] = currentNode.left
          currentNode.left = null
          break
        }
        if (hasOnlyRightChild) {
        }

        previousNode[direction] = null
        break
      }

      if (value > currentNode.value) {
        previousNode = currentNode
        currentNode = currentNode.right
        direction = 'right'
      } else {
        previousNode = currentNode
        currentNode = currentNode.left
        direction = 'left'
      }
    }
  }
}
