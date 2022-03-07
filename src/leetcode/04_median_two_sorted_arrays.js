// 04 - median two sorted arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/

const merge = (nums1, nums2) => {
  let m = nums1.length
  let n = nums2.length

  // 1 - create blank arr with full size (m+n)
  let last = (m + n) - 1
  const arr = Array(m + n).fill()

  // 2 - compare 2 last items from each list
  //   - use max and move cursor
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      arr[last] = nums1[m - 1]
      m--;
    } else {
      arr[last] = nums2[n - 1]
      n--;
    }
    last--;
  }

  // 3 - fill arr with leftover from nums2
  while (n > 0) {
    arr[last] = nums2[n - 1]
    n--;
    last--;
  }

  // 4 - fill arr with leftover from nums1
  while (m > 0) {
    arr[last] = nums1[m - 1]
    m--;
    last--;
  }

  return arr
}

const findMedianSortedArrays = (nums1, nums2) => {
  // 1 - merge sorted arr
  const arr = merge(nums1, nums2)

  // 2 - get middle/isEven
  const size = nums1.length + nums2.length
  const middle = Math.floor(size / 2)
  const isEven = size % 2 == 0;

  // 3 - get average based on odd/even
  const res = isEven ? (arr[middle - 1] + arr[middle]) / 2 : arr[middle]

  // 4 - return format
  return res == 0 ? 0 : res.toFixed(5)
}

console.log(findMedianSortedArrays([1, 3], [2])) // 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])) // (2 + 3) / 2 = 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])) // (0 + 0) / 2 = 0
console.log(findMedianSortedArrays([], [1])) // (0 + 1) = 1.0000
