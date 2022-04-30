// Input: digits = [1,2,3]
// Input: digits = [1,2,3,9]
Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Input: digits = [9]

// TC O(n) SC O(1)
// var plusOne = function(digits) {
//     console.log((BigInt(digits.join('')) + 1n).toString().split(''))
//     return (BigInt(digits.join('')) + 1n).toString().split('')
// }

// TC O(n) SC O(1)
// iterate from end, if there's a 9, replace it with 0. If not, then add 1
// edge case if first number is a 9, add a 1 to the beginning of array
var plusOne = function(digits) {
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i]++
            console.log(digits)
            return digits
        }
    }

    digits.unshift(1)
    console.log(digits)
    return digits
}

plusOne(digits)
