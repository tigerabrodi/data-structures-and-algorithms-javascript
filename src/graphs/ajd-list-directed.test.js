import { it, expect } from 'vitest'
import { AdjListDirected } from './adj-list-directed'

// Test for creating a new graph
it('should create a new graph', () => {
  const graph = new AdjListDirected()
  expect(graph).toBeDefined()
})

// Test for adding a vertex
it('should add vertices correctly', () => {
  const graph = new AdjListDirected()
  graph.addVertex('A')
  graph.addVertex('B')
  expect(graph.hasVertex('A')).toBe(true)
  expect(graph.hasVertex('B')).toBe(true)
  expect(graph.hasVertex('C')).toBe(false)
})

// Test for adding a directed edge
it('should add a directed edge correctly', () => {
  const graph = new AdjListDirected()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addEdge('A', 'B')
  expect(graph.hasEdge('A', 'B')).toBe(true)
  expect(graph.hasEdge('B', 'A')).toBe(false) // Direction matters
})

// Test for removing a directed edge
it('should remove a directed edge correctly', () => {
  const graph = new AdjListDirected()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addEdge('A', 'B')
  graph.removeEdge('A', 'B')
  expect(graph.hasEdge('A', 'B')).toBe(false)
})

// Test for ensuring that non-existing edges are handled correctly
it('should handle non-existing edges correctly', () => {
  const graph = new AdjListDirected()
  graph.addVertex('A')
  graph.addVertex('B')
  expect(graph.hasEdge('A', 'B')).toBe(false)
})

// Test for handling invalid vertices in edge operations
it('should handle invalid vertices when adding or removing edges', () => {
  const graph = new AdjListDirected()
  graph.addVertex('A')
  expect(() => graph.addEdge('A', 'B')).toThrow()
  expect(() => graph.removeEdge('A', 'B')).toThrow()
})
