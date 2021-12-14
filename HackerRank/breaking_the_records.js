const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    let result = [0,0]
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            result[0] += 1
            max = scores[i]
        } else if (scores[i] < min) {
            result[1] += 1
            min = scores[i]
        }
    }
    console.log(result)
    return result
}

breakingRecords(scores)