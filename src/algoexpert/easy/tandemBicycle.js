function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => b - a)
  blueShirtSpeeds.sort((a, b) => (fastest ? a - b : b - a))

  let result = 0

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
  }

  return result
}
