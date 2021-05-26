Input: dividend = -2147483648, divisor = 2
// Input: dividend = 1, divisor = -1


var divide = function(dividend, divisor) {
    let quotient = 0
    let absDividend = Math.abs(dividend)
    let absDivisor = Math.abs(divisor)
    let currentDiv = absDividend

    if (dividend === 0) {
        console.log(0)
        return 0
    } else if (dividend === divisor) {
        console.log(1)
        return 1
    } else if (divisor === 1) {
        console.log(dividend)
        return dividend
    } else if (divisor === -1) {
        if (dividend === -2147483648) {
            console.log(2147483647)
            return 2147483647
        }
        console.log(-dividend)
        return -dividend
    }

    while (absDivisor < currentDiv) {
        quotient++
        currentDiv -= absDivisor
    }
    if (dividend < 0 && divisor > 0) {
        console.log('this happened, ', 0-quotient)
    } else if (dividend > 0 && divisor < 0) {
        console.log(0-quotient)
    } else {
        console.log(quotient)
    }
};

divide(dividend, divisor)


// var divide = function(dividend, divisor) {
//     let quotient = 0
//     let currentDiv = dividend
//     while (Math.abs(divisor) < Math.abs(currentDiv)) {
//         quotient++
//         currentDiv -= Math.abs(divisor)
//     }
//     if (dividend < 0 && divisor > 0) {
//         console.log(-quotient)
//     } else if (dividend > 0 && divisor < 0) {
//         console.log(0-quotient)
//     } else {
//         console.log(quotient)
//     }
// };