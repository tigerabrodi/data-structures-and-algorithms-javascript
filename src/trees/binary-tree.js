class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinaryTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.isEmpty()) {
      this.root = newNode
      return
    }

    const queue = [this.root]

    while (queue.length) {
      const currentNode = queue.pop()

      if (currentNode.right && currentNode.left) {
        queue.push(currentNode.right)
        queue.push(currentNode.left)
        continue
      }

      if (!currentNode.left) {
        currentNode.left = newNode
        break
      }

      if (!currentNode.right) {
        currentNode.right = newNode
        break
      }
    }
  }

  inorderTraversal(currentNode = this.root, result = []) {
    if (!currentNode) return result

    this.inorderTraversal(currentNode.left, result)
    result.push(currentNode.value)
    this.inorderTraversal(currentNode.right, result)

    return result
  }

  toArray() {
    if (this.isEmpty()) {
      return null
    }

    let result = [this.root.value]

    const queue = [this.root]

    while (queue.length) {
      const currentNode = queue.pop()

      if (currentNode.right && currentNode.left) {
        queue.push(currentNode.right)
        queue.push(currentNode.left)

        result = [...result, currentNode.left.value, currentNode.right.value]
        continue
      }

      if (currentNode.left) {
        queue.push(currentNode.left)
        result = [...result, currentNode.left.value]
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
        result = [...result, currentNode.right.value]
      }
    }

    console.log(result)

    return result
  }
}
