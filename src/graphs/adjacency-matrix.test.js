import { it, expect } from 'vitest'
import { AdjacencyMatrix } from './adjacency-matrix'

it.only('should create a new graph with the correct number of vertices', () => {
  const graph = new AdjacencyMatrix(4)
  expect(graph.numberOfVertices).toBe(4)
  expect(graph.matrix.length).toBe(4)
  graph.matrix.forEach((row) => expect(row.length).toBe(4))
})

it('should correctly add an edge between two vertices', () => {
  const graph = new AdjacencyMatrix(4)
  graph.addEdge(0, 1)
  expect(graph.matrix[0][1]).toBe(1)
  expect(graph.matrix[1][0]).toBe(1) // If undirected graph
})

it('should correctly remove an edge between two vertices', () => {
  const graph = new AdjacencyMatrix(4)
  graph.addEdge(0, 1)
  graph.removeEdge(0, 1)
  expect(graph.matrix[0][1]).toBe(0)
  expect(graph.matrix[1][0]).toBe(0) // If undirected graph
})

it('should correctly identify if an edge exists', () => {
  const graph = new AdjacencyMatrix(4)
  graph.addEdge(0, 1)
  expect(graph.hasEdge(0, 1)).toBe(true)
  expect(graph.hasEdge(1, 0)).toBe(true) // If undirected graph
  expect(graph.hasEdge(0, 2)).toBe(false)
})

it('should handle edges with invalid vertices', () => {
  const graph = new AdjacencyMatrix(4)
  expect(() => graph.addEdge(0, 4)).toThrow()
  expect(() => graph.addEdge(4, 0)).toThrow()
})
