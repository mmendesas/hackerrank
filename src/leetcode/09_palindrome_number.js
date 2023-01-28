// https://leetcode.com/problems/palindrome-number/

function isPalindrome(num) {
  if (num < 0) return false;

  let temp = num;
  let sum = 0;

  while (temp != 0) {
    sum = (sum * 10) + Math.floor(temp % 10);
    // update temp
    temp = Math.floor(temp / 10);
  }

  return num === sum;
}

console.clear()
console.log(isPalindrome(121)) // true

console.log(isPalindrome(123)) // false
