export class AdjacencyMatrix {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices
    // 2d array
    this.matrix = Array.from({ length: numberOfVertices }, () =>
      Array.from({ length: numberOfVertices }, () => 0)
    )
  }
}
