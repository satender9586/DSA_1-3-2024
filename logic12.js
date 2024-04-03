// find the how much digit are there is

let values = 123456;
let count = 0;

while (values !== 0) {
  values = Math.floor(values / 10);
  count++;
}
console.log(count);
