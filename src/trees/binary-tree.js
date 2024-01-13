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
}
