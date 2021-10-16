const merge = function (nums1, m, nums2, n) {
  // last index
  let last = m + n - 1;

  // merge in reverse order
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1]
      m--;
    } else {
      nums1[last] = nums2[n - 1]
      n--;
    }
    last--;
  }

  // fill nums1 with leftover from nums2
  while (n > 0) {
    nums1[last] = nums2[n-1]
    n--;
    last--;
  }

  return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1,2,2,3,5,6]
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)) // [1,2,3,4,5,6]
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1)) // [1,2,3,4,5,6]
console.log(merge([1], 1, [], 0)) // [1]
console.log(merge([], 0, [1], 1)) // [1]
