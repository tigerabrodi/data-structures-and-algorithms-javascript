export class AdjListDirected {
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
}
