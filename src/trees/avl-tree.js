class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

export class AVLTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  getHeight(node) {
    if (!node) {
      return 0
    }

    return node.height
  }

  getBalanceFactor(node) {
    if (!node) {
      return 0
    }

    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  getNewHeight(node) {
    if (!node) {
      return 0
    }

    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
  }

  rightRotate(node) {
    let newRoot = node.left
    let newLeftChildOfOldRoot = newRoot.right

    let oldRoot = node

    node = newRoot

    node.right = oldRoot
    oldRoot.left = newLeftChildOfOldRoot

    oldRoot.height = this.getNewHeight(oldRoot)
    node.height = this.getNewHeight(node)

    console.log({
      oldRoot,
      node,
    })

    return node
  }

  leftRotate(node) {
    let newRoot = node.right
    let oldRoot = node
    let newRightChildOfOldRoot = newRoot.left

    node = newRoot
    newRoot.left = oldRoot
    oldRoot.right = newRightChildOfOldRoot

    oldRoot.height = this.getNewHeight(oldRoot)
    node.height = this.getNewHeight(node)

    return node
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

    currentNode.height = this.getNewHeight(currentNode)

    const balanceFactorOfCurrentNode = this.getBalanceFactor(currentNode)

    const isLeftHeavy = balanceFactorOfCurrentNode > 1
    const isRightHeavy = balanceFactorOfCurrentNode < -1

    if (isLeftHeavy) {
      // If `value` is less than the value of the left child of the current node,
      // then it means that the left child of the current node is the newly
      // inserted node. In this case, we need to perform a right rotation.
      // This means it is only skewed to the left, and not right.
      if (value < currentNode.left.value) {
        // left left case
        return this.rightRotate(currentNode)
      } else {
        // if `value` is greater than the value of the left child of the current
        // node, then it means that the right child of the left child of the
        // current node is the newly inserted node. In this case, we need to
        // perform a left rotation on the left child of the current node, and
        // then a right rotation on the current node.
        // This means it is skewed to the left and then to the right.
        currentNode.left = this.leftRotate(currentNode.left)
        return this.rightRotate(currentNode)
      }
    }

    if (isRightHeavy) {
      if (value > currentNode.right.value) {
        // Value is greater means its on the right, this is the essence of BST
        // Similar explanation as above
        return this.leftRotate(currentNode)
      } else {
        // Similar explanation as above
        // Value less means its on the left
        // It becomes a zigzag where it is skewed to the right and then to the left
        currentNode.right = this.rightRotate(currentNode.right)
        return this.leftRotate(currentNode)
      }
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
      } else if (!currentNode.right) {
        return currentNode.left
      }

      let minFromRightSubTree = currentNode.right

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
