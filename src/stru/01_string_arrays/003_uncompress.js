
// brute force
const uncompress1 = (str) => {
  let num = 0;
  let result = ''

  for (let c of str) {
    if (c.match(/[0-9]/)) {
      num = (num * 10) + Number(c)
    }
    else {
      result += c.repeat(num || 1)
      num = 0
    }
  }

  return result;
}

// two pointers 10b2s
// 1 0 b 2 s
//     j
// i

const uncompress = (str) => {
  let i = 0;
  let j = 0;
  let result = '';

  while (j < str.length) {
    if (str[j].match(/[0-9]/)) {
      j += 1;
    } else {
      const letter = str[j];
      const num = str.slice(i, j);

      result += letter.repeat(num || 1)

      j += 1;
      i = j;
    }
  }

  return result;
}

console.log(uncompress('4s2b')) // -> 'ssssbb'
console.log(uncompress('10b2s')) // -> 'ssssbb'
console.log(uncompress('3n12e2z')) // -> 'nnneeeeeeeeeeeezz'
