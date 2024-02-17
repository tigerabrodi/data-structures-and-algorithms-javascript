import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const stonesQueue = new MaxPriorityQueue()

  stones.forEach((stone) => stonesQueue.enqueue(stone))

  while (stonesQueue.size() > 1) {
    const firstLargestStone = stonesQueue.dequeue().element // Access the element property
    const secondLargestStone = stonesQueue.dequeue().element // Access the element property

    if (firstLargestStone !== secondLargestStone) {
      const result = firstLargestStone - secondLargestStone
      stonesQueue.enqueue(result)
    }
  }

  return stonesQueue.isEmpty() ? 0 : stonesQueue.dequeue().element // Access the element property
}
