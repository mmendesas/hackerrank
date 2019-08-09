const jumpingOnClouds = (c) => {
  let jumps = 0;

  for (let i = 0; i < c.length; i += 1) {
    // two step jump
    if (c[i + 2] === 0) {
      jumps++;
      i++;
      continue;
    }
    // one step jump
    if (c[i + 1] === 0) {
      jumps++;
      continue;
    }
  }
  return jumps;
}

export default jumpingOnClouds;
