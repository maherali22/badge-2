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