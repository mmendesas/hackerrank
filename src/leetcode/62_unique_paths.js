// https://leetcode.com/problems/unique-paths/

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

const uniquePaths = (m, n, memo = {}) => {
  const key = `${m},${n}`
  if (key in memo) return memo[key]
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)
  return memo[key]
}

// uniquePaths(2, 3)
// [x] [ ] [ ]  - 0,0  0,1  0,2
// [ ] [ ] [y]  - 1,0  1,1  1,2

// 1 - rigth - right - down
// 2 - right - down  - right
// 3 - down  - rigth - right

// [x]         - 1 col 0 row - 0 // no move
// [x] [y]     - 2 col 1 row - 1 // one move
// [x] [ ] [y] - 3 col 1 row - 2 // moves

console.log(uniquePaths(0, 1)) // 0
console.log(uniquePaths(3, 1)) // 1
console.log(uniquePaths(1, 2)) // 1
console.log(uniquePaths(1, 1)) // 1
console.log(uniquePaths(3, 2)) // 3
console.log(uniquePaths(7, 3)) // 28
console.log(uniquePaths(3, 3)) // 6
