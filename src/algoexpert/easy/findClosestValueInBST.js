export function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) {
    return closest
  }

  let diffClosest = Math.abs(target - closest)
  let diffTreeValue = Math.abs(target - tree.value)

  if (diffClosest > diffTreeValue) {
    closest = tree.value
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest)
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest)
  } else {
    return closest
  }
}
