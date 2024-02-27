/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null

  const oldNodes = new Map()

  function dfs(oldNode) {
    if (oldNodes.has(oldNode)) {
      return oldNodes.get(oldNode)
    }

    const newNode = new Node(oldNode.val)
    oldNodes.set(oldNode, newNode)

    for (let i = 0; i < oldNode.neighbors.length; i++) {
      const neig = oldNode.neighbors[i]
      newNode.neighbors.push(dfs(neig))
    }

    return newNode
  }

  return dfs(node)
}
