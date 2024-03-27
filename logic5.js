// find max nomber

const arr = [2, 1, 8, 2, 4];
var max = 0;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("Max value is :-", max);

// find minimum number

const arr1 = [9, 5, 8, 3, 4, 10];
var min = Infinity;

for (let i = 0; i < arr1.length; i++) {
  if (min > arr1[i]) {
    min = arr1[i];
  }
}
console.log("Minimum value is :-", min);

// random number generator

const randomNumberGenerate = () => {
  let randomNumber = Math.floor(Math.random() * 1000000);
  console.log(randomNumber);
};

randomNumberGenerate();

// table

const printTableFormat = (val) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${val} * ${i} = ${val * i}`);
  }
};

printTableFormat(2);
