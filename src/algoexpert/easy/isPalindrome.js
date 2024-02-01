// function inefficientIsPalindrome(string) {
//   let filteredString = ''
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].match(/[a-zA-Z0-9]/)) {
//       filteredString += string[i].toLowerCase()
//     }
//   }
//   let reversedString = filteredString.split('').reverse().join('')
//   return filteredString === reversedString
// }

function isCharacterAlphaNumeric(character) {
  const charCode = character.charCodeAt(0)
  const isDigit = charCode > 47 && charCode < 58 // numeric (0-9)
  const isUpperCase = charCode > 64 && charCode < 91 // upper alpha (A-Z)
  const isLowerCase = charCode > 96 && charCode < 123 // lower alpha (a-z)

  return isDigit || isUpperCase || isLowerCase
}

function isStringPalindrome(inputString) {
  let startPointer = 0
  let endPointer = inputString.length - 1

  while (startPointer < endPointer) {
    // Move startPointer to the next alphanumeric character from the start
    while (
      startPointer < endPointer &&
      !isCharacterAlphaNumeric(inputString[startPointer])
    ) {
      startPointer++
    }

    // Move endPointer to the next alphanumeric character from the end
    while (
      startPointer < endPointer &&
      !isCharacterAlphaNumeric(inputString[endPointer])
    ) {
      endPointer--
    }

    // Compare characters ignoring case
    if (
      inputString[startPointer].toLowerCase() !==
      inputString[endPointer].toLowerCase()
    ) {
      return false
    }

    startPointer++
    endPointer--
  }
  return true
}
