// /**
//  * @param {string[]} word1
//  * @param {string[]} word2
//  * @return {boolean}
//  */
// var arrayStringsAreEqual = function (word1, word2) {
//   let word1Str = ''
//   let word2Str = ''

//   // Concatenate strings in word1
//   for (let i = 0; i < word1.length; i++) {
//     word1Str += word1[i]
//   }

//   // Concatenate strings in word2
//   for (let j = 0; j < word2.length; j++) {
//     word2Str += word2[j]
//   }

//   // Compare the concatenated strings
//   return word1Str === word2Str
// }

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let indexWord1 = 0,
    indexWord2 = 0 // Indexes for the arrays
  let charIndexWord1 = 0,
    charIndexWord2 = 0 // Indexes for the characters within the arrays' strings

  while (indexWord1 < word1.length && indexWord2 < word2.length) {
    if (
      word1[indexWord1][charIndexWord1] !== word2[indexWord2][charIndexWord2]
    ) {
      return false // Characters do not match
    }

    charIndexWord1++
    charIndexWord2++

    // Move to the next character in word1
    if (charIndexWord1 === word1[indexWord1].length) {
      indexWord1++
      charIndexWord1 = 0
    }

    // Move to the next character in word2
    if (charIndexWord2 === word2[indexWord2].length) {
      indexWord2++
      charIndexWord2 = 0
    }
  }

  // Ensure both arrays were fully traversed and we are at the start of a new string in both
  return (
    indexWord1 === word1.length &&
    indexWord2 === word2.length &&
    charIndexWord1 === 0 &&
    charIndexWord2 === 0
  )
}
