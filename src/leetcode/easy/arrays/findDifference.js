/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)

  let res1Set = new Set()
  let res2Set = new Set()

  for (let num of nums1) {
    if (!nums2Set.has(num)) {
      res1Set.add(num)
    }
  }

  for (let num of nums2) {
    if (!nums1Set.has(num)) {
      res2Set.add(num)
    }
  }

  // Convert sets back to arrays before returning
  return [Array.from(res1Set), Array.from(res2Set)]
}
