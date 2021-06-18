var minOperations = function(logs) {
    let steps = 0
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '../') {
            if (steps > 0) {
                steps--
            }
        } else if (logs[i] != './') {
            steps++
        }
    }
    return steps
};