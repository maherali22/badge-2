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

let x="Hello";
console.log(reverseString(x));

//reverse string using recursion
const reverseStringRecursion = (str) => {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursion(str.substr(1)) + str.charAt(0);
  }
};

let y="Hello";
console.log(reverseStringRecursion(y));


//example for for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//example for while loop

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

//example for do while loop

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 10);