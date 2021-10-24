// 04 - median two sorted arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1, nums2) => {
  let m = nums1.length
  let n = nums2.length

  let size = m + n
  let last = size - 1;
  const middle = size <= 2 ? 0 : Math.floor(size / 2)
  const arr = Array(size).fill(0)

  // mount in reverse order
  while (m > 0 && n > 0) {
    if (last == middle - 1) break;

    if (nums1[m - 1] > nums2[n - 1]) {
      arr[last] = nums1[m - 1]
      m -= 1
    } else {
      arr[last] = nums2[n - 1]
      n -= 1
    }
    last -= 1
  }

  // get the rest of first arr
  while (m > 0) {
    arr[last] = nums1[m - 1]
    m -= 1;
    last -= 1;
  }

  // get the rest of second arr
  while (n > 0) {
    arr[last] = nums2[n - 1]
    n -= 1;
    last -= 1;
  }

  console.log(size, middle, arr)

  const result = size % 2 != 0 ? arr[middle] : (arr[middle] + arr[middle - 1]) / 2;

  // console.log(result, arr, m, n)
  return result?.toFixed(5)
}

console.log(findMedianSortedArrays([1, 3], [2])) // 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])) // (2 + 3) / 2 = 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])) // (0 + 0) / 2 = 0
console.log(findMedianSortedArrays([], [1])) // (0 + 1) = 1.0000
