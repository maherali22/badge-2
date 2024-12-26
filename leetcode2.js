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