// given a string of characters and numbers, uncompress the string

// using regex approach
const uncompress1 = (text) => {
  if (!text) return "";

  const groups = text.match(/[0-9]+[a-z]/gi); // identify groups <num><char>
  const extracted = groups.map((item) => {
    const [num, letter] = item.match(/([0-9])([a-z])/i).slice(1); // ['4','c']
    return letter.repeat(parseInt(num) || 1);
  });

  return extracted.join("");
};

// my approach with for of
const uncompress2 = (text) => {
  if (!text) return "";

  const isLetter = (c) => c.match(/[a-z]/i);

  const items = [];
  let num = "";

  for (let c of text) {
    if (!isLetter(c)) {
      num += c;
      continue;
    }
    items.push([Number(num), c]);
    num = "";
  }

  // extract ['ssss', 'bb']
  const extracted = items.map(([num, letter]) => {
    return letter.repeat(Number(num) || 1);
  });
  return extracted.join("");
};

// using two pointers
const uncompress = (text) => {
  if (!text) return "";

  const numbers = "0123456789";
  let result = "";
  let i = 0;
  let j = 0;

  while (j < text.length) {
    if (numbers.includes(text[j])) {
      j += 1;
    } else {
      const num = Number(text.slice(i, j));
      result += text[j].repeat(num || 1);
      j++;
      i = j;
    }
  }
  return result;
};

// tests
console.log(uncompress("2c3a1t")); // -> 'ccaaat';
console.log(uncompress("4s2b")); // 'ssssbb'
console.log(uncompress("2p1o5p")); // 'ppoppppp'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
