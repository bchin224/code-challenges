// O(n) TC, O(1) SC

var mySqrt = function(x) {
    let result = 0
    while (result * result < x) {
        if ((result + 1) * (result + 1) > x) {
            return result
        } else {
            result++
        }
    }
    return result

};