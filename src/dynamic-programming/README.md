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

# Questions to ask yourself to identify a DP problem

1. **Are there overlapping subproblems?**

   - Does solving the problem involve solving the same smaller problems multiple times?

2. **Is there an optimal substructure?**

   - Can a solution to the whole problem be constructed from the solutions of its subproblems?

3. **Can the problem be broken down into smaller, simpler subproblems?**

   - Is it possible to divide the problem into smaller parts that are easier to solve?

4. **Is memoization or tabulation applicable?**

   - Can the results of subproblems be stored and efficiently retrieved to avoid redundant calculations?

5. **Are there multiple ways to reach a solution?**

   - Does the problem involve making a series of choices at each step to reach an overall optimal solution?

6. **Is the problem an optimization problem?**
   - Does the problem ask for a minimum, maximum, or best result (such as shortest path, largest sum, longest sequence)?

# Questions to break down a DP problem

1. **What is the Base Case?**

   - What is the simplest instance of the problem, and what is its solution? This forms the starting point of your solution.

2. **What are the Subproblems?**

   - What smaller, simpler problems does the original problem consist of? How does solving these lead to a solution for the overall problem?

3. **How do Subproblems Overlap?**

   - Identify specific instances where the same subproblem is solved multiple times. This overlap is where DP provides efficiency.

4. **What is the Recurrence Relation?**

   - How can you express the solution to a problem in terms of the solutions to its subproblems? This relation is often the key insight for the DP solution.

5. **How to Store Solutions to Subproblems?**

   - Will you use memoization (top-down with recursion) or tabulation (bottom-up with iteration)? Decide on the data structure (array, matrix, hashmap) to store these solutions.

6. **What is the Order of Solving Subproblems?**

   - Especially for tabulation, what order should you follow to ensure that the solution to a subproblem is computed before it’s needed?

7. **How to Construct the Solution to the Original Problem?**

   - Once subproblems are solved, how do you combine their solutions to get the solution to the original problem?

8. **Are there Initialization Conditions?**

   - For tabulation, how do you initialize the table? What values do you put in the table before starting to solve subproblems?

9. **Can Subproblems be Simplified?**

   - Are there redundancies or unnecessary parts in your subproblems that can be streamlined?

10. **Is there a Scope for Optimization?**
    - Can the space or time complexity be further optimized? For example, can you reduce the dimensions of the DP table?
