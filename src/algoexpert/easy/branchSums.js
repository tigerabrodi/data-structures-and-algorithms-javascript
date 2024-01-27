export function branchSums(root, sumOfBranch = 0, sums = []) {
  sumOfBranch += root.value

  const isAtLeafNode = !root.left && !root.right
  if (isAtLeafNode) {
    sums.push(sumOfBranch)
  }

  if (root.left) {
    branchSums(root.left, sumOfBranch, sums)
  }

  if (root.right) {
    branchSums(root.right, sumOfBranch, sums)
  }

  return sums
}
