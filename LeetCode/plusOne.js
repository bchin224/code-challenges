// Input: digits = [1,2,3]
// Input: digits = [1,2,3,9]
Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Input: digits = [9]

var plusOne = function(digits) {
    console.log((BigInt(digits.join('')) + 1n).toString().split(''))
    return (BigInt(digits.join('')) + 1n).toString().split('')
}

plusOne(digits)
