# Recursion

Recursion is when a function calls itself. It is a useful technique for solving problems that can be broken down into smaller problems of the same type.

We have two cases:

- Base case: The function does not call itself. It is the stopping point.
- Recursive case: The function calls itself.

Both cases are important. If we don't have a base case, we'll have an infinite loop. If we don't have a recursive case, we'll never call the function.

# Recursive cases

There is a difference between having multiple recursive cases and multiple recursive calls.

Multiple recursive cases means we have multiple if statements that call the function recursively.

Multiple recursive calls means we call the function recursively multiple times in the same if statement.

# Factorial

```js
export function factorial(num) {
  if (num === 1) return 1

  return num * factorial(num - 1)
}
```

Let's imagine we pass 5: `factorial(5)`.

It's like the first number is a person asking another person.

1. 5 asks 4 "Hey, I want to know the factorial of 5, can you help me?"
2. 4 says "Sure, I'll ask 3 to get my factorial"
3. 3 says "Sure, I'll ask 2 to get my factorial"
4. 2 says "Sure, I'll ask 1 to get my factorial"
5. 1 says "Sure, I'll return 1"
6. 2 says "Ok, I'll return 2 \* 1"
7. 3 says "Ok, I'll return 3 \* 2"
8. 4 says "Ok, I'll return 4 \* 6"
9. 5 says "Ok, I'll return 5 \* 24"
10. 5 returns 120

That's the end of the story.

How recursion works is the last function call is the first one to return. So the last function call is `factorial(1)` and it returns 1. Then `factorial(2)` returns 2 _ 1, then `factorial(3)` returns 3 _ 2, and so on.

# From recursion to iteration

Transforming a recursive function into an iterative one requires understanding how the call stack works.

We need to identify the base case and how we're gonna break down the problem into smaller problems.

In recursion, the call stack is used to store the function calls. The last function call is the first one to return. That's why we don't have to store what the functions return in a variable.

You've to determine what information is being carried across recursive calls.

Use the identified data structure to store and retrieve the state information during each iteration of the loop.

Ensure that each iteration correctly modifies the state to mirror what would happen in a recursive call.

# From iteration to recursion

**Identify Loop and State Variables:**

Find the loop (e.g., for, while) in the iterative function.
Identify the variables that represent the state and how they change with each iteration.

**Define Base Case:**

Determine the condition that ends the loop. This will often become your base case in the recursive version.
The base case is where the recursion will stop.

**Recursive Function Structure:**

Create a function that makes a recursive call with an updated state, mirroring the iteration step.
Ensure that with each recursive call, you move closer to the base case.

**Replicate Loop Logic:**

The body of the loop often becomes the body of the recursive function.
The recursive call should reflect the iteration logic.

# Memoization

Memoization is an optimization technique used primarily in recursive algorithms to improve performance by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## How to spot opportunities for memoization

**Overlapping Subproblems:** If your recursive algorithm computes the same values multiple times, memoization can be beneficial. This is common in dynamic programming problems, such as calculating Fibonacci numbers, binomial coefficients, or the shortest path in a graph.

**Top-Down Approach:** Memoization is often used in a top-down approach, where you start solving the problem from the original problem state and break it down into smaller subproblems.

**Deterministic Functions:** The function should be deterministic, meaning it should return the same output given the same input.

## Implementing memoization

**Create a Cache:** Use a data structure (like an object or array) to store the results of function calls. The inputs to the function serve as keys, and the computed results are the values.

**Check the Cache:** At the beginning of the function, check if the result for the current inputs is already in the cache. If it is, return the cached result instead of recomputing it.

**Store Results:** After computing the result for a set of inputs, store this result in the cache before returning it.

**Pass the Cache in Recursive Calls:** Ensure that the cache is accessible in each recursive call, either by passing it as an argument or using a closure.

# Divide and Conquer

Divide and conquer is a technique for solving problems by breaking them down into smaller subproblems. It is useful when these subproblems are similar to the original problem, but smaller in size.

The steps are:

1. Divide: Break the problem down into smaller subproblems.
2. Conquer: Solve the subproblems recursively. If they are small enough, solve the subproblems as base cases.
3. Combine: Take the solutions to the subproblems and merge them into a solution to the original problem.
4. Base case: The problem cannot be broken down any further.
5. Recursive case: The problem can be broken down into smaller subproblems.

- Simplify complex problems
- Efficiency
- Parallelism

## Analogy

Imagine you're tasked with organizing a large library. Doing it all at once seems overwhelming. So, you apply a divide and conquer approach:

**Divide:** You divide the entire library into sections (fiction, non-fiction, science, literature, etc.).

**Conquer:** Each section is then organized independently. This task is simpler because each section is smaller and more manageable than the whole library.

**Combine:** Once all sections are organized, the entire library is organized as a result of organizing these individual sections.
