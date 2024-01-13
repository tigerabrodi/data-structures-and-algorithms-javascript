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

# Dijkstra's Algorithm

This one was difficult. It took me a while to grasp it, and then turning it into code was hard.

This algorithm is used to find the shortest path between two vertices in a weighted graph. You can imagine we have a graph of cities and the edges are the roads connecting them. Each road has a distance. The distances aren't the same between the roads. We want to find the shortest path between two cities.

```js
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
```

In this implementation, I'm using an array for the unvisited nodes. But it's better to use a priority queue. I will implement that later. That would make the algorithm faster. From O(V + E) to O(E log V). Because we are using a priority queue, we don't have to loop over all the nodes to find the node with the smallest distance. We can just dequeue the node with the smallest distance.

To understand this algorithm, you have to understand the two parts it contains:

1. Finding the shortest distance between two nodes.
2. Finding the shortest path between two nodes.

The distance between two nodes is the sum of the weights of the edges between them.

The shortest path is the full path, all nodes from end to start.

For example, I can tell you, the shortest distance to drive to New York from Boston is 200 miles. But that doesn't tell you how to get there. You need the full path, which is the shortest path.

This means we need to keep track of two things:

- The distance of each node from the start node.
- The previous node of each node.

It was hard to me to grasp why we need to keep track of previous nodes. Let me repeat myself.

Just because I tell you the shortest distance between two nodes, doesn't mean you know how to get there. I can be like hey, the shortest distance between Miami and New York is 100 miles, but as you get going, you will be like, oh wait, which path exactly do I take? So you need to keep track of the previous nodes.

We want to make sure not to visit the same node twice. So we keep track of the visited nodes in an array.

## Initialization

We initialize the distances object. We set the distance of the start node to 0. We set the distance of all other nodes to Infinity. Any number will be less than Infinity. So when we loop over the distances object, we will always find a node with a distance less than Infinity at the beginning.

As for previous nodes, we set the previous node of each node to null.

## Which node to visit next?

We want to visit the node with the smallest distance.

## Updating distances and previous nodes

We loop over the edges of the current node. We calculate the distance to the neighbor. If the distance to the neighbor is shorter than the distance we have stored in the distances object, we update the distances object and the previous nodes object.

Now, this is where it gets a bit confusing.

The first thing you have to understand is that each node has neighbors. However, other nodes can also have the same neighbors. That's why distances and previous nodes may already have a value for the neighbor.

It confused me here because my initial mental model was distances and previous nodes for each neighbor are either empty or filled. But that's not the case. They may already have a value.

```js
distances[edge.value] = distanceToNeighbor
previousNodes[edge.value] = keyOfNodeWithSmallestDistance
```

If you look here, in human language, we're saying:

- Distance: "The distance to the neighbor is the distance to the current node plus the weight of the edge between them."
- Previous node: "The previous node of the neighbor is the current node."

To clarify: The current node, we're checking it's neighbors. So naturally, the previous node of the neighbor is the current node.

We calculcate the distance of current node by getting it from distances object. This way, we make sure we're getting the sum of the weights: `const distanceToNeighbor = distances[keyOfNodeWithSmallestDistance] + edge.weight`

## Reconstruction of the path

```js
let currentNode = end
const path = []

// Loop through the previous nodes object until we reach the start node
while (currentNode !== start) {
  // Add the current node to the start path
  path.unshift(currentNode)
  currentNode = previousNodes[currentNode]
}

path.unshift(start)
```

Here we're reconstructing the path. We start with the `end` node (we get this from the parameters of the function). We loop over the previous nodes object until we reach the start node. We add each node to the beginning of the path. We set the current node to the previous node. We keep doing this until we reach the start node. Then we add the start node to the path.

## Greedy algorithm

This algorithm is a greedy algorithm. It makes the best decision at each step. It doesn't look ahead. It doesn't look at the big picture. For example, we are looking for the shortest path between two nodes.

At each step, we choose the node with the smallest distance. We don't look ahead to see if there is a better path. We just choose the node with the smallest distance at each step.

### Further explanation

1. **Local Optimal Choices:** A greedy algorithm makes a series of choices that seem the best at that moment, without considering the global context. It picks the locally optimal solution at each step with the hope of finding a global optimum.

2. **No Backtracking:** Once a choice is made, a greedy algorithm doesn't reconsider it. This is different from algorithms that might go back and change earlier decisions based on future information.

3. **Short-Sightedness:** Greedy algorithms don't look ahead to see the consequences of a choice. They make decisions based only on the current situation.
