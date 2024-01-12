export class AdjListDirected {
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

  addEdge(vertex1, vertex2) {
    const hasVertex1 = this.list.has(vertex1)
    const hasVertex2 = this.list.has(vertex2)

    if (!hasVertex1 || !hasVertex2) {
      throw new Error('Vertex does not exist')
    }

    const edgesForVertex1 = this.list.get(vertex1)
    const newEdgesForVertex1 = [...edgesForVertex1, vertex2]
    this.list.set(vertex1, newEdgesForVertex1)
  }

  hasEdge(vertex1, vertex2) {
    const edgesForVertex1 = this.list.get(vertex1)
    return edgesForVertex1.includes(vertex2)
  }

  removeEdge(vertex1, vertex2) {
    const hasVertex1 = this.list.has(vertex1)
    const hasVertex2 = this.list.has(vertex2)

    if (!hasVertex1 || !hasVertex2) {
      throw new Error('Vertex does not exist')
    }

    const edgesForVertex1 = this.list.get(vertex1)
    const newEdgesForVertex1 = edgesForVertex1.filter(
      (vertex) => vertex !== vertex2
    )

    this.list.set(vertex1, newEdgesForVertex1)
  }
}
