const pairProduct = (numbers, targetProduct) => {
  const visited = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const remain = targetProduct / num;

    if (remain in visited) {
      return [visited[remain], i];
    }
    visited[num] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
