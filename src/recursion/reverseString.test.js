import { expect, it } from 'vitest'
import { reverseString } from './reverseString'

it('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh')
  expect(reverseString('world')).toBe('dlrow')
})
