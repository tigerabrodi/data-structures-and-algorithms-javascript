import { it, expect } from 'vitest'
import { AdjListUndirected } from './adj-list-undirected'

// Test for creating a new graph
it.only('should create a new graph', () => {
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
