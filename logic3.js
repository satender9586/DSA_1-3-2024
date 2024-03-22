// find array of array length

const arr = [2, [2, 2], [2, 2, 2]];

let count = 0;
function findArryalength(value) {
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      count++;
    }
  }
  console.log(count + 1);
}

findArryalength(arr);
