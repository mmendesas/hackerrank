// using two pointer
const compress1 = (s) => {
  let result = '';
  let i = 0;
  let j = 0;

  while(j <= s.length){
    if(s[i] === s[j]){
      j += 1
    } else {
      const dist = j - i;
      if(dist === 1){
        result += s[i]
      }else {
        result += dist + s[i]
      }
      i = j // move forward
    }
  }
  return result;
}

console.log(compress('ccaaatsss')); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
