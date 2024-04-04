// find value in array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let findvalue = 5;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === findvalue) {
    console.log("value is finded ", arr[i]);
    break;
  }
}
