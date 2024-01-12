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

  #checkBothVertices(vertex1, vertex2) {
    const hasVertex1 = this.list.has(vertex1)
    const hasVertex2 = this.list.has(vertex2)

    if (!hasVertex1 || !hasVertex2) throw new Error('Invalid vertices')
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
    this.#checkBothVertices(vertex1, vertex2)

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
    this.#checkBothVertices(vertex1, vertex2)

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
    this.#checkBothVertices(vertex1, vertex2)

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

  removeEdge(vertex1, vertex2) {
    this.#checkBothVertices(vertex1, vertex2)

    const edgesForVertex1 = this.list.get(vertex1)
    const edgesForVertex2 = this.list.get(vertex2)

    const newEdgesForVertex1 = edgesForVertex1.filter(
      (edge) => edge.value !== vertex2
    )

    const newEdgesForVertex2 = edgesForVertex2.filter(
      (edge) => edge.value !== vertex1
    )

    this.list.set(vertex1, newEdgesForVertex1)
    this.list.set(vertex2, newEdgesForVertex2)
  }

  #findNodeWithSmallestDistance(unvisited, distances) {
    let smallestDistance = Infinity
    let smallestNode = null

    unvisited.forEach((node) => {
      if (distances[node] < smallestDistance) {
        smallestDistance = distances[node]
        smallestNode = node
      }
    })

    return smallestNode
  }

  findShortestPathDijkstra(start, end) {
    // We need all keys of the graph as an array
    const unvisited = [...this.list.keys()]

    const distances = {
      [start]: 0,
    }

    const previousNodes = {}

    // All nodes except the start node have a distance of Infinity
    // I had a bug here where I was setting the distance of the start node to Infinity, which was causing the algorithm to fail lol
    unvisited.forEach((edge) => {
      if (edge !== start) {
        distances[edge] = Infinity
      }

      // Here we set the previous node of each node to null
      previousNodes[edge] = null
    })

    while (unvisited.length) {
      const keyOfNodeWithSmallestDistance = this.#findNodeWithSmallestDistance(
        unvisited,
        distances
      )

      if (!keyOfNodeWithSmallestDistance) {
        break
      }

      // Remove the node from the unvisited set
      unvisited.splice(unvisited.indexOf(keyOfNodeWithSmallestDistance), 1)

      const edgesForNode = this.list.get(keyOfNodeWithSmallestDistance)

      edgesForNode.forEach((edge) => {
        const distanceToNeighbor =
          distances[keyOfNodeWithSmallestDistance] + edge.weight

        // if isDistanceToNeighborShorter, it means we have found a shorter path to the neighbor, so we need to update the distances and previous nodes objects, previous nodes because the path to the neighbor is from a new node
        const isDistanceToNeighborShorter =
          distanceToNeighbor < distances[edge.value]
        if (isDistanceToNeighborShorter) {
          distances[edge.value] = distanceToNeighbor
          previousNodes[edge.value] = keyOfNodeWithSmallestDistance
        }
      })
    }

    let currentNode = end
    const path = []

    // Loop through the previous nodes object until we reach the start node
    while (currentNode !== start) {
      // Add the current node to the start path
      path.unshift(currentNode)
      currentNode = previousNodes[currentNode]
    }

    path.unshift(start)

    return path
  }
}
