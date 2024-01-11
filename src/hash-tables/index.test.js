import { it, expect } from 'vitest'
import { HashTable } from './index'

it('should store and retrieve values', () => {
  const hashTable = new HashTable(10)
  hashTable.set('key1', 'value1')
  hashTable.set('key2', 'value2')

  expect(hashTable.get('key1')).toBe('value1')
  expect(hashTable.get('key2')).toBe('value2')
})

it('should handle collisions', () => {
  const hashTable = new HashTable(10)
  // These keys should result in the same hash index to test collision handling
  hashTable.set('key1', 'value1')
  hashTable.set('yk1e', 'value2')

  expect(hashTable.get('key1')).toBe('value1')
  expect(hashTable.get('yk1e')).toBe('value2')
})

it('should return null for non-existent keys', () => {
  const hashTable = new HashTable(10)
  hashTable.set('key1', 'value1')

  expect(hashTable.get('key2')).toBeNull()
})

it('should allow removing a value', () => {
  const hashTable = new HashTable(10)
  hashTable.set('key1', 'value1')
  hashTable.remove('key1')

  expect(hashTable.get('key1')).toBeNull()
})

it('should handle removing values in case of collisions', () => {
  const hashTable = new HashTable(10)
  hashTable.set('key1', 'value1')
  hashTable.set('yk1e', 'value2')
  hashTable.remove('key1')

  expect(hashTable.get('key1')).toBeNull()
  expect(hashTable.get('yk1e')).toBe('value2')
})
