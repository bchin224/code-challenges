// log all pairs of the array

const boxes = [1,2,3,4,5]

const logPairs = arr => {
    for (let i = 1; i <= arr.length; i++) {
        arr.map(pair => console.log(i, pair))
    }
}

logPairs(boxes)

