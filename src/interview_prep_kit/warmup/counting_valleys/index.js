const countValleys = (n, s) => {
  let step = 0;
  let valleys = 0;
  let last = 0;

  for (let i = 0; i < n; i += 1) {
    s[i] === 'U' ? step++ : step--;
    if (step === -1 && last === 0) valleys++;
    last = step;
  }
  return valleys;
}

export default countValleys;
