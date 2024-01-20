import { expect, it } from 'vitest'
import { sumOfDigits } from './sumOfDigits'

it('sumOfDigits', () => {
  expect(sumOfDigits(123)).toEqual(6)
  expect(sumOfDigits(1234)).toEqual(10)
  expect(sumOfDigits(12345)).toEqual(15)
  expect(sumOfDigits(123456)).toEqual(21)
  expect(sumOfDigits(1234567)).toEqual(28)
  expect(sumOfDigits(12345678)).toEqual(36)
  expect(sumOfDigits(123456789)).toEqual(45)
  expect(sumOfDigits(1234567890)).toEqual(45)
})
