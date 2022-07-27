function reverseString(string) {
  return string
    .split("")
    .reverse()
    .join("")
    .replace(/(\r\n|\n|\r)/gm, "");
}

function isPalindrome(string) {
  var re = /[\W_]/g;
  var lowRegStr = string.toLowerCase().replace(re, "");
  var reverseStr = reverseString(lowRegStr);
  return reverseStr === lowRegStr;
}

module.exports = { reverseString, isPalindrome };
