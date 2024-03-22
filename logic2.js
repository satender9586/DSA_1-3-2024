// find same value is objext
// obj1 :{a:10,b:20,c:30,d:40}
// obj2 :{a:10,e:20,c:30,f:40}

const obj1 = { a: 10, b: 20, c: 30, d: 40, m: 90 };
const obj2 = { a: 10, e: 15, c: 30, f: 8, m: 90 };

const newObj = {};

function findSamevalueInObj(obj1, obj2) {
  for (let val1 in obj1) {
    for (let val2 in obj2) {
      if (obj1[val1] == obj2[val2]) {
        newObj[val1] = obj1[val2];
      }
    }
  }
}
findSamevalueInObj(obj1, obj2);

console.log(newObj);
