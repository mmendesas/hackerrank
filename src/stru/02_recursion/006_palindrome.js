const palindrome = (s) => {
  if (s.length <= 1) return true;
  if (s[0] !== s[s.length - 1]) return false; // 'poop'
  const remain = s.slice(1, -1); // 'oo'
  return palindrome(remain);
}
