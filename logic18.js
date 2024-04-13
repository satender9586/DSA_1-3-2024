const arr = [11, [13, 15, 18], [23, 12]];

function FindLargest(arr) {
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        let value = FindLargest(arr[i])
    } else {
      newarr.push(arr[i]);
    }
    console.log(newarr);
  }
}
//const res =
FindLargest(arr);

// console.log(res);
