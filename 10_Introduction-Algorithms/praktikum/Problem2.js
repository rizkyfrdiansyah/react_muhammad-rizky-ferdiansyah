function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function showPrimes(max) {
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

showPrimes(100);
