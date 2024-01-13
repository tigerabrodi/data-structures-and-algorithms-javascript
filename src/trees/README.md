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
