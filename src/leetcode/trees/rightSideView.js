/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []

  const result = []
  const queue = [root]

  let level = 0

  let currentNodesForLevel = 1

  while (queue.length) {
    let levelLength = queue.length

    let rightMostNode = queue[currentNodesForLevel - 1]

    result.push(rightMostNode.val)

    currentNodesForLevel = 0

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift()

      if (node.left) {
        currentNodesForLevel++
        queue.push(node.left)
      }

      if (node.right) {
        currentNodesForLevel++
        queue.push(node.right)
      }
    }

    level += 1
  }

  return result
}
