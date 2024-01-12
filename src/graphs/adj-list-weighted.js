class Node {
  constructor(value, weight) {
    this.value = value
    this.weight = weight
  }
}

export class WeightedGraph {
  constructor() {
    this.list = new Map()
  }

  addVertex(vertex) {
    const hasVertex = this.list.has(vertex)

    if (hasVertex) throw new Error('Vertex already exists')

    this.list.set(vertex, [])
  }

  hasVertex(vertex) {
    const hasVertex = this.list.has(vertex)
    return hasVertex
  }

  addEdge(vertex1, vertex2, weight) {
    const hasVertex1 = this.list.has(vertex1)
    const hasVertex2 = this.list.has(vertex2)

    if (!hasVertex1 || !hasVertex2) throw new Error('Invalid vertices')

    const edgesForVertex1 = this.list.get(vertex1)
    const edgesForVertex2 = this.list.get(vertex2)

    const nodeForVertex1 = new Node(vertex2, weight)
    const nodeForVertex2 = new Node(vertex1, weight)

    const newEdgesForVertex1 = [...edgesForVertex1, nodeForVertex1]
    const newEdgesForVertex2 = [...edgesForVertex2, nodeForVertex2]

    this.list.set(vertex1, newEdgesForVertex1)
    this.list.set(vertex2, newEdgesForVertex2)
  }

  hasEdge(vertex1, vertex2) {
    const hasVertex1 = this.list.has(vertex1)
    const hasVertex2 = this.list.has(vertex2)

    if (!hasVertex1 || !hasVertex2) throw new Error('Invalid vertices')

    const edgesForVertex1 = this.list.get(vertex1)
    const edgesForVertex2 = this.list.get(vertex2)

    const isVertex1InVertex2Edges = edgesForVertex2.some(
      (edge) => edge.value === vertex1
    )

    const isVertex2InVertex1Edges = edgesForVertex1.some(
      (edge) => edge.value === vertex2
    )

    return isVertex1InVertex2Edges && isVertex2InVertex1Edges
  }

  getEdgeWeight(vertex1, vertex2) {
    const hasVertex1 = this.list.has(vertex1)
    const hasVertex2 = this.list.has(vertex2)

    if (!hasVertex1 || !hasVertex2) throw new Error('Invalid vertices')

    const edgesForVertex1 = this.list.get(vertex1)
    const edgesForVertex2 = this.list.get(vertex2)

    const edgeForVertex1 = edgesForVertex1.find(
      (edge) => edge.value === vertex2
    )

    const edgeForVertex2 = edgesForVertex2.find(
      (edge) => edge.value === vertex1
    )

    return edgeForVertex1.weight
  }
}
