// implement pow(x, n)

function myPow(x, n) {
  if (n == 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n
  }

  // par
  if (n % 2 == 0) {
    let res = myPow(x, n / 2);
    return res * res;
  } else {
    return x * myPow(x, n - 1)
  }
}

console.log(myPow(2.00000, 10)) // 1024
console.log(myPow(2.10000, 3))  // 9.26100
console.log(myPow(2.00000, -2)) // 0.25
