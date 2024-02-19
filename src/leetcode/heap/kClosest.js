import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const queue = new MinPriorityQueue({
    compare: (a, b) => a.priority - b.priority,
  })

  for (let i = 0; i < points.length; i++) {
    const x = points[i][0]
    const y = points[i][1]

    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    queue.enqueue({ element: points[i], priority: distance })
  }

  const result = []

  for (let j = 0; j < k; j++) {
    result.push(queue.dequeue().element)
  }

  return result
}
