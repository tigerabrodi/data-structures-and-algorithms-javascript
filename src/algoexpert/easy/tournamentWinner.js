export function tournamentWinner(competitions, results) {
  let index = 0

  let hashTable = {}

  let highestValue = ''

  while (index !== competitions.length) {
    const winningTeam = competitions[index][1 - results[index]]

    if (!hashTable[winningTeam]) {
      hashTable[winningTeam] = 3

      if (!hashTable[highestValue]) {
        highestValue = winningTeam
      }
    } else {
      const newValue = hashTable[winningTeam] + 3

      if (hashTable[highestValue] < newValue) {
        highestValue = winningTeam
      }

      hashTable[winningTeam] = newValue
    }

    index++
  }

  return highestValue
}
