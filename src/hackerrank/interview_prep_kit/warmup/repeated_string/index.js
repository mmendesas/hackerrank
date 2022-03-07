const repeatedString = (s, n) => {
  // how many times s appears in N letters
  let times = Math.floor(n / s.length);

  // quantity of a
  let aQty = (s.match(/a/g) || []).length;

  // what remains from times
  let remainder = n % s.length
  let remainStr = s.substring(0, remainder);
  let rQty = (remainStr.match(/a/g) || []).length;
  return (times * aQty) + rQty;
}

export default repeatedString;
