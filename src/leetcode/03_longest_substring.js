// 3. longest substring without repeating characters
// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = str => {
  let len = 0;
  let sub = ''

  for (let c of str) {
    let index = sub.indexOf(c)
    if (index !== -1) {
      sub = sub.slice(index + 1)
    }

    sub += c
    console.log(sub)

    len = Math.max(sub.length, len)
  }

  return len;
};

console.log(lengthOfLongestSubstring('')) // -> 0
console.log(lengthOfLongestSubstring(' ')) // -> 1
console.log(lengthOfLongestSubstring('a')) // -> 1
console.log(lengthOfLongestSubstring('abcd')) // -> 4
console.log(lengthOfLongestSubstring('abad')) // -> 3
console.log(lengthOfLongestSubstring('abcabcbb')) // -> 3 'abc'
console.log(lengthOfLongestSubstring('bbbbb')) // -> 1 'b'
console.log(lengthOfLongestSubstring('pwwkew')) // -> 3 'wke'
