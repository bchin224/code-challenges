Input: num = 14

var numberOfSteps = function(num) {
    console.log(num)
    let steps = 0
    while (num > 0) {
        if (num % 2 === 0) {
            steps++
            num /= 2
            console.log('Num is now: ', num)
        } else {
            steps++
            num -= 1
            console.log('Num is now: ', num)
        }
    }
    console.log(steps)
    return steps
};

numberOfSteps(num)