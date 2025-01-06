const reverseStringRecursion = (str) => {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursion(str.substr(1)) + str.charAt(0);
  }
};

let y="Hello";
console.log(reverseStringRecursion(y));
