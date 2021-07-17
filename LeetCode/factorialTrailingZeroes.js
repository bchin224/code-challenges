// Input: n = 3
Input: n = 5
Input: n = 30

var trailingZeroes = function(n) {
    let count = 0
    for (let i = 5; i <= n; i*= 5) {
        count += Math.floor(n/i)
    }
    return count
};

trailingZeroes(n)

// because 0's appear in factorial whenever something is multipled by 10
// or (2 * 5), we can just keep track of the number of times n
// is multiplied by 5 and that would be the number of times
// it was multiplied by 10 (the count of zeros)