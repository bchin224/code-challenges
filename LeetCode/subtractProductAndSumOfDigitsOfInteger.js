n = 234

// TC O(n) SC O(1)
// slow and involves converting to string and parsing
var subtractProductAndSum = function(n) {
    const digits = Array.from(String(n), Number)
    const sum = digits.reduce((a,b) => a + b)
    const product = digits.reduce((a,b) => a * b)
    console.log(product - sum)
    return product - sum
};

subtractProductAndSum(n)