// WARNING: COPIED FROM INTERNET

// 1 - check if char is number (ascii value in range 48 - 57)
// 2 - subtract ascii('c') value from ascii('0') value
//   - ascii of '5' = 53
//   - ascii of '0' = 48
//   - 53 - 48 = 5 // integer
// 3 - move number to right base -> res = (res * 10) + (ascii('c') - ascii('0'))

const ascii_value = x => x.charCodeAt(0);
const ascii_isNum = x => (ascii_value(x) >= 48 && ascii_value(x) <= 57);

const myAtoi = str => {
  const text = str.trim(); // remove leading space
  if (!text.length) return 0; // empty string

  let res = 0;
  let sign = 1;
  let start = 0;

  const MIN = Math.pow(-2, 31);
  const MAX = Math.pow(2, 31) - 1;

  // handling sign
  if (text[0] === '-') {
    sign = -1;
    start = 1;
  } else if (text[0] === '+') {
    start = 1;
  }

  for (let i = start; i < text.length; i++) {
    const c = text[i];

    if (!ascii_isNum(c)) {
      return res * sign;
    }
    // check result for iteration
    res = (res * 10) + (ascii_value(c) - ascii_value('0'))

    // check boundaries
    if (res * sign < MIN) return MIN;
    if (res * sign > MAX) return MAX;
  }

  res = res * sign;

  return res;
}

describe('string to number', () => {
  it('empty string', () => {
    expect(myAtoi("")).toEqual(0);
  });

  it('regular number', () => {
    expect(myAtoi("9")).toEqual(9);
  });

  it('ignore whitespace', () => {
    expect(myAtoi("  42")).toEqual(42);
  });

  it('understang negative sign', () => {
    expect(myAtoi("-42")).toEqual(-42);
  });

  it('ignore non digit', () => {
    expect(myAtoi("word")).toEqual(0);
  });

  it('respect integer boundaries', () => {
    expect(myAtoi("-91283472332")).toEqual(-2147483648);
  });

  it('ignore initial 00', () => {
    expect(myAtoi("0022")).toEqual(22);
  });

  it('words before number', () => {
    expect(myAtoi("words 99")).toEqual(0);
  });

  it('words after number', () => {
    expect(myAtoi("99 words")).toEqual(99);
  });

  it('out of bounds', () => {
    expect(myAtoi("21474836460")).toEqual(2147483647);
  });
})
