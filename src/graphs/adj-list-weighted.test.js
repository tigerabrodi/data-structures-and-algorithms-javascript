import { it, expect } from 'vitest'
import { WeightedGraph } from './adj-list-weighted'

// Test for creating a new graph
it.only('should create a new graph', () => {
  const graph = new WeightedGraph()
  expect(graph).toBeDefined()
})

// Test for adding a vertex
it('should add vertices correctly', () => {
  const graph = new WeightedGraph()
  graph.addVertex('A')
  graph.addVertex('B')
  expect(graph.hasVertex('A')).toBe(true)
  expect(graph.hasVertex('B')).toBe(true)
})

// Test for adding a weighted edge
it('should add weighted edges correctly', () => {
  const graph = new WeightedGraph()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addEdge('A', 'B', 5)
  expect(graph.hasEdge('A', 'B')).toBe(true)
  expect(graph.getEdgeWeight('A', 'B')).toBe(5)
})

it('should find the shortest path between two vertices', () => {
  const graph = new WeightedGraph()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addEdge('A', 'B', 1)
  graph.addEdge('B', 'C', 2)
  graph.addEdge('A', 'C', 4)

  const shortestPath = graph.findShortestPath('A', 'C')
  expect(shortestPath).toEqual(['A', 'B', 'C']) // Expected path with total weight of 3
})
