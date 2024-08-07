const isPrime = (num) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true
}


console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(3)) // true
console.log(isPrime(2017)); // -> true
console.log(isPrime(2048)); // -> false
