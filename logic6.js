// patterns

// 1234
// 1234
// 1234
// 1234

// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= 4; j++) {
//     line += j + " ";
//   }
//   console.log(line);
// }

// *
// **
// ***
// ****

// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*" + " ";
//   }
//   console.log(line);
// }

// 1
// 12
// 123
// 1234

// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j + " ";
//   }
//   console.log(line);
// }

// 1
// 23
// 456
// 78910

// let valu = 1;
// for (let i = 1; i <= 4; i++) {
//   let line = "";

//   for (let j = 1; j <= i; j++) {
//     line += valu + " ";
//     valu++;
//   }

//   console.log(line);
// }

// 1
// 21
// 321
// 4321

// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = i; j >= 1; j--) {
//     line += j + " ";
//   }
//   console.log(line);
// }

// console.log("hello");

// AAA
// BBB
// CCC

// const arr = ["A", "B", "C"];
// for (let i = 0; i < 3; i++) {
//   let line = "";
//   for (let j = 0; j < 3; j++) {
//     line += arr[i] + " ";
//   }
//   console.log(line);
// }

// ABC
// ABC
// ABC

// const arr = ["A", "B", "C"];
// for (let i = 0; i < 3; i++) {
//   let line = "";
//   for (let j = 0; j < 3; j++) {
//     line += arr[j] + " ";
//   }
//   console.log(line);
// }

let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

var count = 0;
for (let i = 0; i < 3; i++) {
  let line = "";

  for (let j = 0; j < 3; j++) {
    line += arr[count] + " ";
    count++;
  }
  console.log(line);
}
