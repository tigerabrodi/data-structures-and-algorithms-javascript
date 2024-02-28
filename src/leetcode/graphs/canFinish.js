function canFinish(numCourses, prerequisites) {
  const preMap = new Map()
  // Initialize adjacency list
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, [])
  }
  for (const [course, preReq] of prerequisites) {
    preMap.get(course).push(preReq)
  }

  const visitedSet = new Set()
  const dfsVisited = new Set() // Tracks nodes in the current DFS path

  function dfs(course) {
    if (dfsVisited.has(course)) return false // Cycle detected
    if (visitedSet.has(course)) return true // Already processed, no cycle found previously

    dfsVisited.add(course)
    for (const preReq of preMap.get(course)) {
      if (!dfs(preReq)) return false // Cycle detected in a prerequisite
    }
    dfsVisited.delete(course) // Remove from current DFS path
    visitedSet.add(course) // Mark as processed globally

    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false
  }
  return true
}
