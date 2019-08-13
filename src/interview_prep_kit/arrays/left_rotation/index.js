

const rotLeft = (arr, d) => {
  const part = arr.splice(0, d);
  arr = arr.concat(part);
  return arr;
}

export default rotLeft;
