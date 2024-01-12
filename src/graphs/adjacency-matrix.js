export class AdjacencyMatrix {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices
    // 2d array
    this.matrix = Array.from({ length: numberOfVertices }, () =>
      Array.from({ length: numberOfVertices }, () => 0)
    )
  }

  addEdge(vertex1, vertex2) {
    this.matrix[vertex1][vertex2] = 1
    this.matrix[vertex2][vertex1] = 1
  }

  removeEdge(vertex1, vertex2) {
    this.matrix[vertex1][vertex2] = 0
    this.matrix[vertex2][vertex1] = 0
  }
}
