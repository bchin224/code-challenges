Input: dividend = 7, divisor = -3

var divide = function(dividend, divisor) {
    let quotient = 0
    let currentDiv = dividend
    while (Math.abs(divisor) < Math.abs(currentDiv)) {
        quotient++
        currentDiv -= Math.abs(divisor)
    }
    if (dividend < 0 && divisor > 0) {
        console.log(-quotient)
    } else if (dividend > 0 && divisor < 0) {
        console.log(0-quotient)
    } else {
        console.log(quotient)
    }
};

divide(dividend, divisor)