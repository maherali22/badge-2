var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    let lastWord = arr[arr.length - 1];
    return lastWord.length;
};

var lengthOfLastWord = function(s) {
    let lastWord = "";
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            if (lastWord.length > 0) {
                return lastWord.length;
            }
        } else {
            lastWord = s[i] + lastWord; 
        }
    }
    return lastWord.length;
};

var lengthOfLastWord = function(s) {
    let lastWord = "";
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            if (lastWord.length > 0) {
                return lastWord.length;
            }
        } else {
            lastWord = s[i] + lastWord;
        }
    }
    return lastWord.length;
};

var palindrome = function(s) {
    let reversed = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed === s;
};

var camelCase = function(s) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            count++;
        }
    }
    return count;
};