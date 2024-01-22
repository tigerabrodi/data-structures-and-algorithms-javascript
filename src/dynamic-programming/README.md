# Dynamic Programming

Dynamic Programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions using a memory-based data structure.

Dynamic programming in itself isn't difficult. The difficult part is figuring out how to turn the problem into subproblems so that you can apply dynamic programming to it.

# General Indicators

Type of Problem: DP is commonly used for optimization (finding the minimum or maximum), counting problems, and certain "Yes/No" questions (can something be done given the constraints).

Familiar Patterns: Many DP problems follow certain patterns like Knapsack, Longest Common Subsequence, or Matrix Chain Multiplication. Recognizing these patterns with practice can help in identifying DP problems.

# How to spot a DP problem

- The problem can be broken down into smaller, repetitive subproblems.
- The optimal solution to the problem can be constructed from the optimal solutions of its subproblems.
- The solutions to subproblems can be stored and reused.
- The problem involves making choices at each step that could affect the overall solution.
