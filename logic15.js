// find span in array

const arr = [2, 4, 5, 33, 66, 7, 8, 9, 10];

let max = -Infinity;
let min = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(max - min);
