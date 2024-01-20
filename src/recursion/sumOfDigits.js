export const sumOfDigits = (num) => {
  const isSingleNumber = num <= 9
  if (isSingleNumber) {
    return num
  }

  const lastNumber = num % 10
  const newNumber = Math.floor(num / 10)

  return lastNumber + sumOfDigits(newNumber)
}
