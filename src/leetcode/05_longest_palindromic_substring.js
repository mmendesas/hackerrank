// longest palindromic substring

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

const isPalindrome = text => text === text.split('').reverse().join('');

const longestPalindromeBrute = text => {
  let size = 0;
  let chunk = ''
  let result = ''

  let mText = text;

  while (mText.length > 0) {
    for (let c of mText) {
      chunk += c;
      if (chunk.length == 1 || isPalindrome(chunk)) {
        if (chunk.length >= size) {
          size = chunk.length;
          result = chunk;
        }
      }
    }
    mText = mText.substring(1)
    chunk = ''
  }

  return result;
}

const longestPalindrome = text => {
  let longest = ''

  const expandCheck = (left, right) => {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      if (right - left + 1 > longest.length) {
        longest = text.slice(left, right + 1);
      }

      left--;
      right++;
    }
  }

  for (let i = 0; i < text.length; i++) {
    expandCheck(i, i);
    expandCheck(i, i + 1);
  }

  return longest;
}


console.log(longestPalindrome('babad')) // bab
console.log(longestPalindrome('cbbd'))  // bb
