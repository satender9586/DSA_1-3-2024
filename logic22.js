// 30 QUESTIONS SOLVE SHRIYANS SCHOOL

// question  harsh bhai kese ho
// output  oh esek iahb hsrash

const str = "harsh bhai kese ho";

const arr = str.split(" ");

const saveStr = arr.map((data) => data.split("").reverse().join(""));
console.log(saveStr.join(" "));
