function plusMinus(arr) {
  const map = { pos: 0, neg: 0, zero: 0 }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { map.pos++ }
    else if (arr[i] < 0) { map.neg++ }
    else map.zero++
  }

  return [
    (map.pos / arr.length).toFixed(6),
    (map.neg / arr.length).toFixed(6),
    (map.zero / arr.length).toFixed(6)
  ]
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
// 0.500000  0.333333 // 1.666667
