export class AdjListUndirected {
  constructor() {
    this.list = new Map()
  }

  addVertex(vertex) {
    const isExistingVertex = this.list.has(vertex)

    if (isExistingVertex) throw new Error('Vertex already exists')

    this.list.set(vertex, [])
  }

  hasVertex(vertex) {
    const isExistingVertex = this.list.has(vertex)
    return isExistingVertex
  }

  addEdge(vertex1, vertex2) {
    const edgesForVertex1 = this.list.get(vertex1)
    const edgesForVertex2 = this.list.get(vertex2)

    const newEdgesForVertex1 = [...edgesForVertex1, vertex2]
    const newEdgesForVertex2 = [...edgesForVertex2, vertex1]

    this.list.set(vertex1, newEdgesForVertex1)
    this.list.set(vertex2, newEdgesForVertex2)
  }

  hasEdge(vertex1, vertex2) {
    const edgesForVertex1 = this.list.get(vertex1)
    const edgesForVertex2 = this.list.get(vertex2)

    const isVertex1InVertex2Edges = edgesForVertex2.includes(vertex1)
    const isVertex2InVertex1Edges = edgesForVertex1.includes(vertex2)

    return isVertex1InVertex2Edges && isVertex2InVertex1Edges
  }

  removeEdge(vertex1, vertex2) {
    const edgesForVertex1 = this.list.get(vertex1)
    const edgesForVertex2 = this.list.get(vertex2)

    const newEdgesForVertex1 = edgesForVertex1.filter(
      (edge) => edge !== vertex2
    )
    const newEdgesForVertex2 = edgesForVertex2.filter(
      (edge) => edge !== vertex1
    )

    this.list.set(vertex1, newEdgesForVertex1)
    this.list.set(vertex2, newEdgesForVertex2)
  }

  dfs(startingVertex, visited = new Set(), result = []) {
    if (!visited.has(startingVertex)) {
      visited.add(startingVertex)
      result.push(startingVertex)
    }

    const edges = this.list.get(startingVertex)
    edges.forEach((edge) => {
      if (!visited.has(edge)) {
        this.dfs(edge, visited, result)
      }
    })

    return result
  }

  bfs(startingVertex) {
    const visited = new Set()
    const queue = [startingVertex]
    visited.add(startingVertex)
    const result = [startingVertex]

    while (queue.length) {
      const currentVertex = queue.shift()
      const edges = this.list.get(currentVertex)
      edges.forEach((edge) => {
        if (!visited.has(edge)) {
          result.push(edge)
          visited.add(edge)
          queue.push(edge)
        }
      })
    }

    return result
  }
}
