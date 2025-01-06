// Valid Anagram
// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

let anagram = (s, t) => {
  if (s.split("").sort().join("") == t.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
};
 
let a="anagram"
let b="nagaram"
console.log(anagram(a,b));
console.log(anagram("anagram", "gramanb"));
