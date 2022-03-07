/**
 * return the matching pairs of socks
 * countPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])
 */
const countPairs = (items) => {
  items.sort();
  let pairs = 0;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] == items[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

export default countPairs;
