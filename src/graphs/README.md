# Graphs

Different types of Graphs exist.

Three common ones:

- Undirected Graphs
- Directed Graphs
- Weighted Graphs

Graph consists of vertices and edges.

Vertices are simply nodes. They are the values.

Edges are the connections between the nodes.

To visualize, imagine roads connecting cities. The cities are the vertices and the roads are the edges.

Or friends on Facebook. The friends are the vertices and the connections are the edges.

# Different representations of Graphs

You can represent graphs in two ways;

- Adjacency Matrix: 2D array of vertices. First vertex will be the first row. In it, each column represents the edges. If there is an edge, it will be 1. If not, it will be 0.

- Adjacency List: Array of linked lists. Each index represents a vertex. The linked list at that index represents the edges. If there is an edge, it will be in the linked list. If not, it will be null.

Most of the time, you will use Adjacency List. It is more efficient. Rarely will your need Adjacency Matrix. It may be useful if you need to know if there is an edge between two vertices in constant time and have a lot of edges.

# Graph Traversal

There are two ways to traverse a graph:

- Depth First Search (DFS)
- Breadth First Search (BFS)

## DFS

DFS is like a maze. You go as far as you can in one direction. If you hit a dead end, you backtrack and try another direction. You keep track of all directions you've tried, so you don't go in circles.

DFS is done recursively.

Big O: O(V + E) -> Because input is a graph, we have to visit every vertex and every edge.

```js
  dfs(startingVertex, visited = new Set(), result = []) {
    // Mark the starting vertex as visited
    // In one of the recursive calls, it may be one of the edges.
    // We make sure to not call it recursively again to end up in an infinite loop.
    if (!visited.has(startingVertex)) {
      visited.add(startingVertex)
      result.push(startingVertex)
    }

    const edges = this.list.get(startingVertex)
    // Each vertex has a linked list of edges.
    // We loop and call dfs on each edge.
    edges.forEach((edge) => {

      if (!visited.has(edge)) {
	// If the edge has not been visited, we call dfs on it.
        this.dfs(edge, visited, result)
      }
    })

    return result
  }
```

## BFS

BFS is like a tree. You start at the root and visit all the children. Then you visit all the children of the children. You keep track of all the children you've visited, so you don't visit them again.

Interestingly, this is a little bit diffcult. The approach is more, either you know it or you don't. It's not as intuitive as DFS.

We store the first vertex in a queue. Then we have a while loop till the queue is empty. How it works: We dequeue the first vertex.

Wait, is it empty?

No, because we loop over the vertex's edges and enqueue all of them.

Then we dequeue the next vertex. We loop over its edges and enqueue all of them.

To not end up going in circles and visiting the same vertex twice, we keep track of the visited vertices in a set.

Big O: O(V + E) -> Because input is a graph, we have to visit every vertex and every edge.

```js
  bfs(startingVertex) {
    const visited = new Set()
    const queue = [startingVertex]
    visited.add(startingVertex)
    const result = [startingVertex]

    while (queue.length) {
      const currentVertex = queue.shift()
      const edges = this.list.get(currentVertex)
      edges.forEach((edge) => {
        if (!visited.has(edge)) {
          result.push(edge)
          visited.add(edge)
          queue.push(edge)
        }
      })
    }

    return result
  }
```
