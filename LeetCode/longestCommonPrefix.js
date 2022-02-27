Input: strs = ["flower","flow","flight"]

// O(n^2) TC O(1) SC
var longestCommonPrefix = function(strs) {
    let first = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let other = strs[i]
        while (first !== other) {
            if (first.length > other.length) {
                first = first.substring(0, first.length - 1)
            } else if (first.length <= other.length) {
                other = other.substring(0, other.length - 1)
            }
            console.log('first is: ',first, ' and other is: ', other)
        }
    }
    console.log(first)
};

longestCommonPrefix(strs)

// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return ''
    
//     const first = strs[0] // first word
    
//     // for the legnth of the first word
//     for (let i = 0; i < first.length; i++) {
//         for (let j = 1; j < strs.length; j++) { // iterate through all words except first
//             const other = strs[j] // set other word to the one comparing to first
//             if (other[i] !== first[i]) { // if letters of same index are different
//                 return other.slice(0,i) // return other split at the index
//             }
//         }
//     }
//     return first // if all letters match, return first
// };