
function isPalindrome(s) {
  const size = Math.floor(s.length / 2)
  for (let i = 0; i < size; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false
    }
  }
  return true
}

function palindromeIndex(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      // check remaining
      const piece = s.substring(i + 1, j + 1)
      if (isPalindrome(piece)) return i;
      return j;
    }
  }
  return -1;
}

console.log(palindromeIndex('aaab'))
console.log(palindromeIndex('baa'))
console.log(palindromeIndex('aaa'))
