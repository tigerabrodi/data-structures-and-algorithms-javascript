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
