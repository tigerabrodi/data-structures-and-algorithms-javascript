import { it, expect } from 'vitest'
import { AdjListUndirected } from './adj-list-undirected'

// Test for creating a new graph
it('should create a new graph', () => {
  const graph = new AdjListUndirected()
  expect(graph).toBeDefined()
})

// Test for adding a vertex
it('should add vertices correctly', () => {
  const graph = new AdjListUndirected()
  graph.addVertex('A')
  graph.addVertex('B')
  expect(graph.hasVertex('A')).toBe(true)
  expect(graph.hasVertex('B')).toBe(true)
  expect(graph.hasVertex('C')).toBe(false)
})

// Test for adding an edge
it('should add an edge correctly', () => {
  const graph = new AdjListUndirected()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addEdge('A', 'B')
  expect(graph.hasEdge('A', 'B')).toBe(true)
  expect(graph.hasEdge('B', 'A')).toBe(true) // Undirected graph
})

// Test for removing an edge
it('should remove an edge correctly', () => {
  const graph = new AdjListUndirected()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addEdge('A', 'B')
  graph.removeEdge('A', 'B')
  expect(graph.hasEdge('A', 'B')).toBe(false)
  expect(graph.hasEdge('B', 'A')).toBe(false) // Undirected graph
})

// Test for ensuring that non-existing edges are handled correctly
it('should handle non-existing edges correctly', () => {
  const graph = new AdjListUndirected()
  graph.addVertex('A')
  graph.addVertex('B')
  expect(graph.hasEdge('A', 'B')).toBe(false)
})

// Setup a sample graph
function createSampleGraph() {
  const graph = new AdjListUndirected()
  // A graph that looks like:
  //     A
  //   /   \
  //  B     C
  //  |     |
  //  D --- E
  //       / \
  //      F   G
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addVertex('E')
  graph.addVertex('F')
  graph.addVertex('G')
  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('B', 'D')
  graph.addEdge('C', 'E')
  graph.addEdge('D', 'E')
  graph.addEdge('E', 'F')
  graph.addEdge('E', 'G')
  return graph
}

// Test for Depth-First Search (DFS)
it.only('should correctly perform DFS traversal', () => {
  const graph = createSampleGraph()
  const dfsResult = graph.dfs('A')
  expect(dfsResult).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'G'])
})

// Test for Breadth-First Search (BFS)
it('should correctly perform BFS traversal', () => {
  const graph = createSampleGraph()
  const bfsResult = graph.bfs('A')
  expect(bfsResult).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
})
