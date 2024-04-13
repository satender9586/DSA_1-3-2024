// check the string is palindrom

function checkPalimdrom(str) {
  const myStr = str;

  let checkPalim = myStr.split("").reverse().join("");

  if (checkPalim === myStr) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalimdrom("pop"));
