// reverse number

function reverNumber(num) {
  return num.toString().split("").reverse().join("");
}
console.log(reverNumber(21));

function reverDiffeWay(num) {
  let myNum = num;
  let rever = "";
  while (myNum != 0) {
    rever += +(myNum % 10);
    myNum = Math.floor(myNum / 10);
  }
  return rever;
}

console.log(reverDiffeWay(123));
