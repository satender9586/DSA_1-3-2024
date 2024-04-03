// fabonicii seried

// 0,1,2,3,5,8
let a = 0;
let b = 1;
let temp = 0;
let n = 0;

console.log(a);
console.log(b);
while (n < 6) {
  temp = a + b;
  a = b;
  b = temp;
  n++;
  console.log(temp);
}
