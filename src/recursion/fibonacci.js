// Fibonacci sequence
// It is a sequence of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
// For example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// Fibonacci of 10 step by step:
// 1. fibonacci(10) = fibonacci(9) + fibonacci(8)
// 2. fibonacci(9) = fibonacci(8) + fibonacci(7)
// 3. fibonacci(8) = fibonacci(7) + fibonacci(6)
// 4. fibonacci(7) = fibonacci(6) + fibonacci(5)
// 5. fibonacci(6) = fibonacci(5) + fibonacci(4)
// 6. fibonacci(5) = fibonacci(4) + fibonacci(3)
// 7. fibonacci(4) = fibonacci(3) + fibonacci(2)
// 8. fibonacci(3) = fibonacci(2) + fibonacci(1)
// 9. fibonacci(2) = fibonacci(1) + fibonacci(0)
// 10. fibonacci(1) = 1
// From here, we go up again:
// 11. fibonacci(2) = 1 + 0 = 1
// 12. fibonacci(3) = 1 + 1 = 2
// 13. fibonacci(4) = 2 + 1 = 3
export function fibonacci(n) {
  // Base case: if n is less than 2, it can only be 0 or 1
  // In the Fibonacci sequence, the first two numbers are 0 and 1
  // So, we return n itself
  if (n < 2) {
    return n
  }

  // Recursive case: if n is not less than 2, we calculate the Fibonacci number
  // by adding the two preceding Fibonacci numbers
  // This is done by calling the fibonacci function recursively with n - 1 and n - 2
  return fibonacci(n - 1) + fibonacci(n - 2)
}
