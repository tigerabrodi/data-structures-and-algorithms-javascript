# Binary Tree

A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. Each node in a binary tree can have 0, 1, or 2 children, but no more.

## Binary Tree Properties

- **Root**: The topmost node.
- **Leaf Node**: A node with no children.
- **Depth of Node**: The number of edges from the root to the node.
- **Height of Tree**: The depth of the deepest node.
- **Skewed Tree:** If all nodes have only one child, it's called a skewed binary tree (left-skewed if all are left children, right-skewed if all are right children).
- **Balanced Tree:** A tree where the left and right subtrees of every node differ in height by no more than 1.

## Big O Notation

- **Search**: O(h), where h is the height of the tree.
- **Insertion/Deletion**: O(h).

## Types of Binary Trees

- **Complete Binary Tree**: Every level, except possibly the last, is completely filled.
- **Full Binary Tree**: Every node has 0 or 2 children.
- **Perfect Binary Tree**: All internal nodes have two children, and all leaves are at the same level.
- **Balanced Binary Tree**: The height of the tree is O(log n) where n is the number of nodes. The height whose nodes all have left and right subtrees whose heights differ by at most 1.

## Operations

1. **Traversal**:
   - **Inorder (Left, Root, Right)**
   - **Preorder (Root, Left, Right)**
   - **Postorder (Left, Right, Root)**
2. **Insertion**: Adding a new node.
3. **Deletion**: Removing a node.
4. **Searching**: Finding a node.

## Visualization with Markdown

```plaintext
        3
       / \
      2   5
     /   /
    1   4
```

- Inorder Traversal: 1, 2, 3, 4, 5
- Preorder Traversal: 3, 2, 1, 5, 4
- Postorder Traversal: 1, 2, 4, 5, 3

# Preorder Traversal

```plaintext
	1
       / \
      2   3
     /   / \
    4   5   6
```

- Preorder Traversal: 1, 2, 4, 3, 5, 6

In human language: For every node, we first visit the node itself, then the left subtree, and finally the right subtree. This means parents are visited before children.

# Postorder Traversal

```plaintext
	1
       / \
      2   3
     /   / \
    4   5   6
```

- Postorder Traversal: 4, 2, 5, 6, 3, 1

In human language: For every node, we first traverse the left subtree, then the right subtree, and finally the node itself. This means children are visited before parents.

# Inorder Traversal

```plaintext
	1
       / \
      2   3
     /   / \
    4   5   6
```

- Inorder Traversal: 4, 2, 1, 5, 3, 6

In human language: For every node, we first traverse the left subtree, then the node itself, and finally the right subtree. This means parents are visited before the right child, but after the left child.

# Binary Search Tree

A binary search tree is a binary tree in which the value of left child is less than or equal to the parent node and value of right child is greater than or equal to the parent node.

This is nice because it allows us to search for a value in O(log n) time. Because the tree is sorted, we can use a binary search to find the value we're looking for.

e.g. If we're looking for a value, we can cut out half of the tree by comparing the value we're looking for to the root node. If it's less than the root node, we can ignore the right subtree. If it's greater than the root node, we can ignore the left subtree.

## find

```js
  find(value, currentNode = this.root) {
    if (!currentNode) {
      return null
    }

    if (currentNode.value === value) {
      return currentNode
    }

    if (value > currentNode.value) {
      return this.find(value, currentNode.right)
    } else {
      return this.find(value, currentNode.left)
    }
  }
```

Let's break down how find works.

It's a recursive solution where we either go down right or left depending on whether the value we're looking for is greater than or less than the current node's value.

We can return the recursive solution because our base case is when we find the value we're looking for. If we don't find it, we'll eventually hit a null node and return null.

Big O: O(log n)

## insert

```js
  insert(value, currentNode = this.root) {
    if (!currentNode) {
      const newNode = new Node(value)
      if (!this.root) {
        this.root = newNode
      }
      return newNode
    }

    if (value > currentNode.value) {
      currentNode.right = this.insert(value, currentNode.right)
    } else {
      currentNode.left = this.insert(value, currentNode.left)
    }

    return currentNode
  }
```

This works in a similar way to `find`. The base case essentially tells us there is no node at the current position, so we can insert a new node there. We have to traverse down the right way like in `find` to find the correct position to insert the new node.

To visualize how it works: When we reach a parent whose right or left child is null, we will return a new node in the next recursive call.

So in visualized pseudo code that would be:

```
if (value to insert > value at currentNode)
    currentNode.right = (insert value in right subtree)
else
    currentNode.left = (insert value in left subtree)
```

Essentially, we keep traversing down till we find a null node, there we insert a new node.

Each call updates its respective subtree (if necessary) and returns the current node, maintaining the overall tree structure.

You could say we're mutating the right and left trees of the current node by assigning them to the recursive call.

In the end, we return the entire tree with the new node inserted.

Big O: O(log n)

## delete

```js
  delete(value, currentNode = this.root) {
    if (!currentNode) {
      return currentNode
    }

    if (value > currentNode.value) {
      currentNode.right = this.delete(value, currentNode.right)
    } else if (value < currentNode.value) {
      currentNode.left = this.delete(value, currentNode.left)
    } else {
      if (!currentNode.left) {
        return currentNode.right
      } else if (!currentNode.right) {
        return currentNode.left
      }

      let minFromRightSubTree = currentNode

      while (minFromRightSubTree.left) {
        minFromRightSubTree = minFromRightSubTree.left
      }

      currentNode.value = minFromRightSubTree.value
      currentNode.right = this.delete(
        minFromRightSubTree.value,
        currentNode.right
      )
    }

    return currentNode
  }
```

This one is tricky. There are 4 possible scenarios:

- Delete a node with no children
- Delete a node with left child only
- Delete a node with right child only
- Delete a node with both left and right children

We're doing a recursive solution where we begin by traversing down the tree to find the node we want to delete.

Once we find it, there are scenarios to go over.

One thing you've to understand is, where we're doing `currentNode.right = this.delete(value, currentNode.right)` or `currentNode.left = this.delete(value, currentNode.left)`, we're essentially updating the right or left subtree of the current node.

This is important to know because once we find the node we want to delete, we're essentially updating the right or left subtree of the current node.

To further clarify, if we enter the else statement, we found the node, which means its parent currently is doing `currentNode.right = this.delete(value, currentNode.right)` or `currentNode.left = this.delete(value, currentNode.left)`.

If the currentNode has no left child, we can just return the right child, which will be assigned to the right subtree of the parent node.

If the right child is null, it is fine to return it, because in that case we would want the new node to simply be null if both are null. So parent would be doing `currentNode.right = null` or `currentNode.left = null`.

If the currentNode has no right child, we return the left child.

To reiterate, in those scenarios, currentNode's left or right subtree will be assigned to the left or right subtree of the parent node.

Let's look at two children.

### Deleting node with both left and right children

```js
let minFromRightSubTree = currentNode.right

while (minFromRightSubTree.left) {
  minFromRightSubTree = minFromRightSubTree.left
}

currentNode.value = minFromRightSubTree.value
currentNode.right = this.delete(minFromRightSubTree.value, currentNode.right)
```

So, we found the currentNode we want to delete, but it has two children.

We need to find the minimum value in the right subtree, which will be the smallest value greater than the currentNode. Essentially, in the right subtree, we need to find the leftmost node.

This node is bigger than the left subtree of the currentNode, but smaller than the right subtree of the currentNode.

Once we've found it, we can replace the currentNode's value with the minFromRightSubTree's value.

However, we're not done yet. We need to delete the minFromRightSubTree node, which is the node we just replaced the currentNode with. Which means we have to call delete on the right subtree of the currentNode, passing in the minFromRightSubTree's value.

In the end, the case for the `minFromRightSubTree` will be either it has no children or a right child. And both of those cases are handled by the previous code logic.

# AVL Trees

AVL trees are a type of self-balancing binary search tree. They are named after their inventors, Adelson-Velsky and Landis.

The idea is to maintain a balance factor for each node in the tree. The balance factor is the difference between the height of the left subtree and the right subtree.

The balance factor of any node of an AVL tree is in the integer range [-1, 1].

If the balance factor of any node is -1, 0 or 1, the tree is considered balanced.

If the balance factor of any node is -2 or 2, the tree is considered unbalanced, and we need to do some rotations to balance it.
