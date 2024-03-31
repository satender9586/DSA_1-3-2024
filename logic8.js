// Check is no is prime on not

const num = 8;

function CheckIsNumberPrime(value) {
  var prime = true;
  for (let i = 2; i <= value - 1; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

console.log(CheckIsNumberPrime(num));
