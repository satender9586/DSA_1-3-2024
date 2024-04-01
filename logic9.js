// Print all prime Number

const printAllPrimeNumber = (value) => {
  let arr = [];

  for (let i = 2; i < value; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr;
};

let value = 21;

console.log(printAllPrimeNumber(value));
