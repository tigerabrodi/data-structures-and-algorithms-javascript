class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  depthFirstSearch(array, node = this) {
    array.push(node.name)

    for (const child of node.children) {
      this.depthFirstSearch(array, child)
    }

    return array
  }
}
