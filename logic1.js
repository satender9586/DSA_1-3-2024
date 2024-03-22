// find sum of two index value of  array
// arr = [2,-4,6,4,7,9]
// out : [-4, 4] =  -4+4=0

const arr = [2, -4, 6, 4, 7, 9];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    if (arr[i] + arr[j] == 0) {
      console.log([arr[i], arr[j]]);
    }
  }
}
