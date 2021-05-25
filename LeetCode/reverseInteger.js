Input: x = 1534236469

var reverse = function(x) {
    const splitX = x.toString().split('')
    let rightPointer = splitX.length - 1
    let temp = 0
    for (let i = 0; i < splitX.length /2; i++) {
        if (i < rightPointer && splitX[i] != '-') {
            temp = splitX[i]
            splitX[i] = splitX[rightPointer]
            splitX[rightPointer] = temp
            rightPointer--
        }
    }
    let result = parseInt(splitX.join(''))
    if (result > 2147483648 || result < -2147483648) {
        console.log(0)
    } else {
        console.log(result)
    }
    
};

reverse(x)