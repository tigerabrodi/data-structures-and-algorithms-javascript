/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let score = []

  let totalScore = 0

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '+') {
      const newScore = score[score.length - 1] + score[score.length - 2]
      score.push(newScore)
      totalScore += newScore
    } else if (operations[i] === 'D') {
      const newScore = score[score.length - 1] * 2
      score.push(newScore)
      totalScore += newScore
    } else if (operations[i] === 'C') {
      const prevScore = score.pop()
      totalScore -= prevScore
    } else {
      const scoreInNumber = parseInt(operations[i])
      totalScore += scoreInNumber
      score.push(scoreInNumber)
    }
  }

  return totalScore
}
