function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a)
  blueShirtHeights.sort((a, b) => b - a)

  const shirtColorInFirstRow =
    redShirtHeights[0] > blueShirtHeights[0] ? 'RED' : 'BLUE'

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (shirtColorInFirstRow === 'RED') {
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return false
      }
    } else {
      if (blueShirtHeights[i] <= redShirtHeights[i]) {
        return false
      }
    }
  }

  return true
}
