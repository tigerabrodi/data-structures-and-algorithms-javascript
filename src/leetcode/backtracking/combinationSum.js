/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []

  function dfs(i, cur, totalSum) {
    if (totalSum === target) {
      res.push(cur.slice())
      return
    }

    if (i >= candidates.length || totalSum > target) {
      return
    }

    const currentNumber = candidates[i]

    cur.push(currentNumber)
    dfs(i, cur, currentNumber + totalSum)

    cur.pop(currentNumber)
    dfs(i + 1, cur, totalSum)
  }

  dfs(0, [], 0)

  return res
}
