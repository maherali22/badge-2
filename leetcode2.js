var isPalindrome = function (x) {
  let str = x.toString();
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};

let anagram = (s, t) => {
  if (s.split("").sort().join("") == t.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
};

let a = "anagram";
let b = "nagaram";
console.log(anagram(a, b));
console.log(anagram("anagram", "gramanb"));

const starPattern = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }
  return str;
};

//reverse srting using for loop
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};