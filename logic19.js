// reverse the string EX : Satender  mera naam hai

let num = "Satender mera naam hai";

function reverString(str) {
  const data = str.split(" ").map((data) => data.split("").reverse().join(""));
  console.log(data.join(" "));
}
reverString(num);
