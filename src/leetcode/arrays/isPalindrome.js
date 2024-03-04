var isPalindrome = function (s) {
  let L = 0
  let R = s.length - 1

  while (L < R) {
    while (L < R && !isLetterOrNumber(s[R])) {
      R--
    }

    while (L < R && !isLetterOrNumber(s[L])) {
      L++
    }

    if (s[L].toLowerCase() !== s[R].toLowerCase()) {
      return false
    }

    L++
    R--
  }

  return true
}

function isLetterOrNumber(char) {
  return /^[A-Za-z0-9]$/.test(char)
}
