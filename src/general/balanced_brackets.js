// {[()]}

function balancedBrackets(str) {
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  const stack = []

  for (let c of str) {
    if (c in map) {
      stack.push(c)
      continue;
    }

    if (stack.length === 0 || c !== map[stack.pop()]) {
      return 'NO'
    }

  }
  return stack.length === 0 ? 'YES' : 'NO'
}

console.log(balancedBrackets('{[()]}')) // YES
console.log(balancedBrackets('{[(])}')) // NO
console.log(balancedBrackets('{{[[(())]]}}')) // YES
