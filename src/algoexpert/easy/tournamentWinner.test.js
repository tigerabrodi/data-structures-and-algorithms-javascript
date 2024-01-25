import { tournamentWinner } from './tournamentWinner'
import { expect, it } from 'vitest'

it('should return the team with the highest score', () => {
  const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
  ]

  const results = [0, 0, 1]

  expect(tournamentWinner(competitions, results)).toEqual('Python')
})
