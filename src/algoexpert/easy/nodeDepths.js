export function nodeDepths(root, level = 0) {
  if (!root) {
    return 0
  }

  const totalDepth =
    nodeDepths(root.left, level + 1) + nodeDepths(root.right, level + 1)

  return level + totalDepth
}
