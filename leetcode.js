// Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.

// An uncommon subsequence between two strings is a string that is a 
// subsequence
//  of exactly one of them.
//solution
var findLUSlength = function(a, b) {
    if (a === b) return -1;
    return Math.max(a.length, b.length);
};
// Time Complexity: O(1)
// Space Complexity: O(1)

var findEven = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            count++;
        }
    }
    return count;
};

var findOdd = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};

var findEvenOdd = function(nums) {
    let even = findEven(nums);
    let odd = findOdd(nums);
    return [even, odd];
};