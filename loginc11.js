// find sub  [1,2,3,4,,5,6,7,8,9,10] har char element ka sum nikale

// const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const No = 4;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = 0;
for (let i = 0; i < arr.length - No + 1; i++) {
  let temp = 0;
  for (let j = 0; j < No; j++) {
    temp += arr[j + i];
  }
  if (temp > max) {
    max = temp;
  }
}
console.log(max);
