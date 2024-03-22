const crypto = require('crypto')

export function pickAvatarBackgroundColor(name, colors) {
  // Use SHA-256 hash function
  const hash = crypto.createHash('sha256')
  hash.update(name)
  // Convert the hash to a big integer (since the hash is a hex string)
  const hashInt = BigInt('0x' + hash.digest('hex'))
  // Use modulo to pick a color from the list
  const index = hashInt % BigInt(colors.length)
  return colors[Number(index)]
}
