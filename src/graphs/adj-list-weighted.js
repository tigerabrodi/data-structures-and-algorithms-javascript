import { MinPriorityQueue } from '../queues/MinPriorityQueue'

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
    const distances = new Map()
    const previousNodes = new Map()
    const pq = new MinPriorityQueue()
    const visited = new Set()

    // Initialize distances and priority queue
    this.list.forEach((_, vertex) => {
      distances.set(vertex, vertex === start ? 0 : Infinity)
      previousNodes.set(vertex, null)
      pq.enqueue(vertex, distances.get(vertex))
    })

    while (pq.size()) {
      const currentNode = pq.dequeue()
      visited.add(currentNode)

      if (currentNode === end) break

      const edgesForNode = this.list.get(currentNode)
      edgesForNode.forEach((edge) => {
        if (!visited.has(edge.value)) {
          const distanceToNeighbor = distances.get(currentNode) + edge.weight
          const currentNeighborDistance = distances.get(edge.value)

          if (distanceToNeighbor < currentNeighborDistance) {
            distances.set(edge.value, distanceToNeighbor)
            previousNodes.set(edge.value, currentNode)

            // Update priority in the priority queue
            pq.updatePriority(edge.value, distanceToNeighbor)
          }
        }
      })
    }

    // Reconstruct the path from end to start
    let currentNode = end
    const path = []

    // Check if a path exists
    const isNoPathFound =
      previousNodes.get(currentNode) === null && currentNode !== start
    if (isNoPathFound) {
      return []
    }

    while (currentNode !== start) {
      path.unshift(currentNode)
      currentNode = previousNodes.get(currentNode)
    }

    path.unshift(start)

    return path
  }
}
