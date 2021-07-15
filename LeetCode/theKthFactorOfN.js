Input: n = 12, k = 3
// Input: n = 7, k = 2
Input: n = 4, k = 4
Input: n = 1, k = 1
Input: n = 1000, k = 3

var kthFactor = function(n, k) {
    let factors = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i)
        }
    }
    if (k > factors.length) {
        console.log(-1)
        return -1
    }
    // console.log(factors)
    console.log(factors[k - 1])
    return factors[k - 1]
};

kthFactor(n,k)