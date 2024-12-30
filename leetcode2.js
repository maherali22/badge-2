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

//example for for in loop

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let key in obj) {
  console.log(key);
}

//example for for of loop

let arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log(i);
}

// example for map function

let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr2.map((i) => i * 2);
console.log(arr3);

//example for filter function

let arr4 = [1, 2, 3, 4, 5];
let arr5 = arr4.filter((i) => i % 2 === 0);
console.log(arr5);

//example for reduce function

let arr6 = [1, 2, 3, 4, 5];
let arr7 = arr6.reduce((acc, curr) => acc + curr, 0);
console.log(arr7);

//example for foreach function

let arr8 = [1, 2, 3, 4, 5];
arr8.forEach((i) => console.log(i));

//example for every function

let arr9 = [1, 2, 3, 4, 5];
let arr10 = arr9.every((i) => i % 2 === 0);
console.log(arr10);
