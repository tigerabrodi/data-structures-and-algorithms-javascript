function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b)

  let totalTime = 0

  for (let i = 0; i < queries.length; i++) {
    totalTime += queries[i] * (queries.length - (i + 1))
  }

  return totalTime
}
