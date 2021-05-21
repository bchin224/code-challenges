digits = [8,9,9,9]

var plusOne = function(digits) {
    digits[digits.length-1]++
    while(digits.includes(10)) {
        let index = digits.indexOf(10)
        if (digits.length >= 2) {
            digits[index - 1]++
            digits[index] = 0
        }
        if (digits[0] === 10) {
            digits.fill(0)
            digits.unshift(1)
        }
    }
    console.log(digits)
};

plusOne(digits)

// var plusOne = function(digits) {
//     let BigInt = (parseInt(digits.join('')) + 1).toString().split('')
//     console.log(BigInt)
// };

// plusOne(digits)