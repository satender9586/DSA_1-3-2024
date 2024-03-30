// [1,1,2,3,4,5,5,6,7,8,9,10,11]
// find uniqui emment form array

const arr = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11];

// const uniqueElement = new Set(arr);
// console.log(uniqueElement);

(function uniqueElementFun(valu) {
  const uniqueElement = {};

  for (let i = 0; i < valu.length; i++) {
    if (!uniqueElement[valu[i]] === true) {
      uniqueElement[valu[i]] = true;
    }
  }
  console.log(uniqueElement);
})(arr);
