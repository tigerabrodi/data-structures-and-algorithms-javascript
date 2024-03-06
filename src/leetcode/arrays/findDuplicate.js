// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate = function (nums) {
//   const set = new Set()

//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return nums[i]
//     }

//     set.add(nums[i])
//   }
// }

function findDuplicate(nums) {
  let slow = 0
  let fast = 0

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  let slow2 = 0

  while (slow !== slow2) {
    slow = nums[slow]
    slow2 = nums[slow2]
  }

  return slow
}
