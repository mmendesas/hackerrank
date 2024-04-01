// intersection
// takes two arrays and return elements that are in both arrays

// using array includes
// n = length of array a
// m = length of array b
// time: O(n*m)
// space: O(min(n, m))
const intersection1 = (a, b) => {
  const result = [];
  for (let item of a) {
    if (b.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// transform array into Set O(n*m)
// n = length of array a
// m = length of array b
// time: O(n*m)
// space: O(min(n, m))
const intersection2 = (a, b) => {
  const result = [];
  const bSet = new Set(b);

  for (let item of a) {
    if (bSet.has(item)) {
      result.push(item);
    }
  }
  return result;
};

// optimal solution
// n = length of array a
// m = length of array b
// time: O(n+m)
// space: O(n)
const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);

  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // [2.6]
console.log(intersection([2, 4, 6], [4, 2])); // [2,4]
console.log(intersection([4, 2, 1], [1, 2, 4, 6])); // [1,2,4]
console.log(intersection([0, 1, 2], [10, 11])); // []
