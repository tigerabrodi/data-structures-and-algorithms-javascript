function evaluateExpressionTree(tree) {
  if (!tree) {
    return 0
  }

  if (!tree.left && !tree.right) {
    return tree.value
  }

  const leftValue = evaluateExpressionTree(tree.left)
  const rightValue = evaluateExpressionTree(tree.right)

  switch (tree.value) {
    case -1:
      return leftValue + rightValue
    case -2:
      return leftValue - rightValue
    case -3:
      return Math.trunc(leftValue / rightValue)
    default:
      return Math.trunc(leftValue * rightValue)
  }
}
