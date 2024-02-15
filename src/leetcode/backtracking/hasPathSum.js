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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, totalSum = 0) {
  if (!root) return false

  totalSum += root.val

  if (!root.right && !root.left) {
    if (totalSum === targetSum) {
      return true
    }
  }

  if (hasPathSum(root.left, targetSum, totalSum)) return true

  if (hasPathSum(root.right, targetSum, totalSum)) return true

  totalSum -= root.val

  return false
}
