Input: s = "Hello World"
Input: s = " "
Input: s = "a "

var lengthOfLastWord = function(s) {
    const splitArray = s.trim().split(' ')
    if (s.length === 0) return 0
    console.log((splitArray[splitArray.length - 1]).length)
    // return (splitArray[splitArray.length - 1]).length
};

lengthOfLastWord(s)

// // TC O(log n), SC O(1)
// var lengthOfLastWord = function(s) {
//     console.log(s.trim().split(' ').pop().length)
// };