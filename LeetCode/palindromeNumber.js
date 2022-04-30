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

// var isPalindrome = function(x) {
//     let arrayX = x.toString().split('')
//     let left = 0
//     let right = arrayX.length - 1

//     while (left < right) {
//         if (arrayX[left] != arrayX[right]) {
//             console.log(false)
//             return false
//         } else {
//             left++
//             right--
//         }
//     }
    
//     console.log('true')
//     return true
// };


// var isPalindrome = function(x) {
//     let xArray = x.toString().split('')
//     let left = 0
//     let right = xArray.length - 1

//     if (xArray.length === 1) {
//         console.log(true)
//         return true
//     }
//     while (left <= right) {
//         if (xArray[left] === xArray[right]) {
//             left++
//             right--
//         } else {
//             console.log(false)
//             return
//         }
//     }
//     return true
// };