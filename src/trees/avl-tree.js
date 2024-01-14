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

  balanceAndRotate(currentNode) {
    currentNode.height = this.getNewHeight(currentNode)

    const balanceFactor = this.getBalanceFactor(currentNode)

    if (balanceFactor > 1) {
      // If balance factor is less then 0 for left child, then it is a LR imbalance
      // It means the current node is skewed towards the left and the left child is skewed towards the right
      // It becomes like a zig-zag shape
      // If that is the case, before doing the right rotation,
      // since the current node is skewed towards the left
      // we need to do a left rotation on the left child
      // Because the left child is skewed towards the right
      if (this.getBalanceFactor(currentNode.left) < 0) {
        currentNode.left = this.leftRotate(currentNode.left)
      }
      return this.rightRotate(currentNode)
    } else if (balanceFactor < -1) {
      // Same logic as above, but for the right child
      // If the currentNode is imbalanced towards the right
      // and the right child is imbalanced towards the left
      // then it is a RL imbalance
      // It goes down right, then left, imbalanced
      // We straighten it out by doing a right rotation on the right child
      // Now it is a RR imbalance and we just do a left rotation on the currentNode
      if (this.getBalanceFactor(currentNode.right) > 0) {
        currentNode.right = this.rightRotate(currentNode.right)
      }
      return this.leftRotate(currentNode)
    }

    return currentNode
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

    return this.balanceAndRotate(currentNode)
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

    return this.balanceAndRotate(currentNode)
  }
}
