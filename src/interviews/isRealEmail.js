// A function that checks if an email is real
// This is done via a penalty system
export function isRealEmail(email) {
  let score = 0
  const botKeywords = new Set(['no-reply', 'no-varg'])
  const suspiciousDomains = new Set(['tempmail.com', 'spammail.com'])
  const suspiciousTLDs = new Set(['.xyz', '.info'])

  // Split the email into local part and domain
  const [localPart, domain] = email.split('@')

  // Check for bot keywords
  botKeywords.forEach((keyword) => {
    if (email.includes(keyword)) score += 30
  })

  // Check length of the local part
  if (localPart.length > 20) score += 20

  // Check for special characters
  if (email.includes('=')) score += 20

  // Check for randomness - simplistic check
  const randomPattern = /[0-9]{3,}/ // Simplistic check for sequences of numbers
  if (randomPattern.test(localPart)) score += 15

  // Domain reputation
  if (suspiciousDomains.has(domain)) score += 30

  // Check TLD
  const tld = domain.substring(domain.lastIndexOf('.'))
  if (suspiciousTLDs.has(tld)) score += 25

  // Adjust score to fit into 0-100 range if it exceeds
  score = Math.min(score, 100)

  // Consider email real if score is less than 50
  return score < 50
}
