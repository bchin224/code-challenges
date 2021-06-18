Input: target = [1,3], n = 3

var buildArray = function(target, n) {
    let result = []
    let listCounter = 1
    let i = 0
    while (target[i] <= n) {
        if (!target[i]) {
            break
        }
        if (target[i] === listCounter) {
            result.push('Push')
            i++
        } else {
            result.push('Push')
            result.push('Pop')
        }
        listCounter++
    }
    return result
};

buildArray(target, n)