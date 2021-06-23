Input: x = -121

var isPalindrome = function(x) {
    const arrX = x.toString().split('')
    let leftPointer = 0
    let rightPointer = arrX.length - 1
    
    while (leftPointer <= rightPointer) {
        if (arrX[leftPointer] != arrX[rightPointer]) {
            return false
        } else {
            leftPointer++
            rightPointer--
        }
    }
    return true
};

isPalindrome(x)