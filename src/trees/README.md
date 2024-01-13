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
- **Balanced Binary Tree**: The height of the tree is O(log n) where n is the number of nodes.

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
