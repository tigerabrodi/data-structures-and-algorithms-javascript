/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n, cache = {}) {
//   if (n < 2) return n

//   if (cache[n] !== undefined) {
//     return cache[n]
//   }

//   cache[n] = fib(n - 1) + fib(n - 2)

//   return cache[n]
// }

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function(n) {
//     if (n < 2) return n

//     let arr = [0, 1]
//     let i = 2

//     while (i <= n) {
//         let temp = arr[1]
//         arr[1] = arr[0] + arr[1]
//         arr[0] = temp
//         i++
//     }

//     return arr[1]
// };
