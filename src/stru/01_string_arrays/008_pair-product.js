const pairProduct = (arr = [], target) => {
  const visited = {}
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const diff = Math.abs(target / num)

    if (diff in visited) {
      return [visited[diff], i]
    }
    visited[num] = i
  }
}


console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
