array = [10, 70, 20, 30, 50, 11, 30]

function maxSumIncreasingSubsequence(array) {
    let resultSum = 0
    let tempSum = 0
    let resultArr = []
    let tempArr = []
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // reset all the values
        let rightPointer = i + 1
        let tempArr = []
        tempArr[0] = array[i]
        tempSum = 0
        while (rightPointer < array.length) {
            if (array[i] >= array[rightPointer]) {
                rightPointer++
            } else if (array[i] < array[rightPointer]) {
                tempArr.push[array[rightPointer]]
                tempSum += array[rightPointer]
                rightPointer++
            } else {
                rightPointer++
            }
        }
        if (tempSum > resultSum) {
            resultSum = tempSum
            resultArr = tempArr
        }
    }
    console.log('This is the array: ', resultArr)
    console.log('This is the sum: ', resultSum)
  }

maxSumIncreasingSubsequence(array)

// O(n^2) TC O(n) SC
function maxSumIncreasingSubsequence(array) {
    const sequences = new Array(array.length)
    const sums = array.map(num => num)
    let maxSumIdx = 0
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i]
        for (let j = 0; j < i; j++) {
            const otherNum = array[j]
            if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                sums[i] = sums[j] + currentNum
                sequences[i] = j
            }
        }
        if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i
    }
    console.log([sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)])
    return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)]
}

function buildSequence(array, sequences, currentIdx) {
    const sequence = []
    while (currentIdx !== undefined) {
        sequence.unshift(array[currentIdx])
        currentIdx = sequences[currentIdx]
    }
    return sequence
}

maxSumIncreasingSubsequence(array)