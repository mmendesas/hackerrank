
const getHourglass = (arr, i, j) => {
  const line0 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
  const line2 = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
  const line1 = arr[i + 1][j + 1];
  return line0 + line1 + line2;
}

const hourglassSum = (arr) => {
  let total = -63;
  for (let i = 0; i <= 3; i += 1) {
    for (let j = 0; j <= 3; j += 1) {
      const sum = getHourglass(arr, i, j);
      total = sum > total ? sum : total;
    }
  }
  return total;
}

export default hourglassSum;
