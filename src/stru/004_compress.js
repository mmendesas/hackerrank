// a a a b b
//       i
//         j
const compress = (str) => {
  let i = 0;
  let j = 0;
  let result = ''

  while (j <= str.length) {
    if (str[j] === str[i]) {
      j += 1;
    } else {
      const dist = j - i;
      if (dist === 1) {
        result += str[i]
      } else {
        result += `${dist}${str[i]}`; // 2a2b
      }

      i = j;
    }
  }

  return result
}

console.log(compress('ccaaatsss')) // -> '2c3at3s'
console.log(compress('nnneeeeeeeeeeeezz')) // -> '3n12e2z'
