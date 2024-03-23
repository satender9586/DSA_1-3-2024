// find array of array length

const arr = [2, [[], []], [2, [[], []], [[]]]];

var count = 1;
function findArryalength(value) {
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      findArryalength(value[i]);
      count++;
    }
  }
}

findArryalength(arr);
console.log(count);
