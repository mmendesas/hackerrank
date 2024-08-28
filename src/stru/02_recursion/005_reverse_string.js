const reverseString = (text) => {
  if (!text.length) return '';
  return reverseString(text.slice(1)) + text[0]
}


console.log(reverseString('hello'))
