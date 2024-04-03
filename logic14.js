// 123456789
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

let values = 123456789;
let reminder = 0;

while (values > 0) {
  reminder = Math.floor(values % 10);
  console.log(reminder);

  values = Math.floor(values / 10);
}
