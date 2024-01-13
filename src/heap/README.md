# Min Heap

Min Heap is a tree-based data structure that satisfies the heap property. The heap property states that for every node, the value of the node is less than or equal to the values of its children. The root node is the minimum element in the heap.

How it looks like in array representation:

```text
	1
      /   \
     2     3
    / \   / \
   4   5 6   7
```

```
[1, 2, 3, 4, 5, 6, 7]
```

As you can see, the root node is the minimum element in the heap. The array has a structure that represents a tree.

## Calculcations

The parent of a node at index `i` is at index `Math.floor((i - 1) / 2)`.

The left child of a node at index `i` is at index `2 * i + 1`.

The right child of a node at index `i` is at index `2 * i + 2`.

## Bubble Up

When we insert a new element into the heap, we add it to the end of the array. Then we compare the new element with its parent, if the new element is smaller than its parent, we swap them. We repeat this process until the new element is greater than its parent or it is the root node.

## Bubble Down

When we remove the root node from the heap, we take the last element in the array and put it at the root. Then we compare the new root with its children, if the new root is greater than any of its children, we swap them. We repeat this process until the new root is less than both of its children or it is a leaf node.

## Heapify

```js
  heapify(array) {
    this.heap = array

    let indexOfLastNonLeafNode = this.#getIndexOfLastNonLeafNode()

    while (indexOfLastNonLeafNode >= 0) {
      this.#bubbleDown(indexOfLastNonLeafNode)
      indexOfLastNonLeafNode--
    }
  }
```

`heapify` is interesting. It takes an array and turns it into a heap. It starts from the last non-leaf node and bubbles down each node until it reaches the root node.

The last non-leaf node is the parent of the last element in the array. We can calculate the index of the last non-leaf node by using the formula `Math.floor((array.length - 2) / 2)`.

This is a bit confusing, so in the code I've made it clearer with util functions. This is easier to understand because you quickly grasp we need the first minus 1 to get the index of last element:

```js
  #getIndexOfLastNonLeafNode() {
    const indexOfLastItem = this.heap.length - 1
    return this.#getParentIndex(indexOfLastItem)
  }
```

# Max Heap

Similar to min heap, but the root node is the maximum element in the heap. So you can imagine how the other operations change because of it.
