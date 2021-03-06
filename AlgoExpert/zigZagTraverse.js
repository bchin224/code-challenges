array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
]

// TC O(n) SC O(n)
function zigzagTraverse(array) {
    const height = array.length - 1
    const width = array[0].length - 1
    const result = []
    let row = 0
    let col = 0
    let goingDown = true
    while(!isOutOfBounds(row, col, height, width)) {
        result.push(array[row][col])
        if (goingDown) {
            if (col === 0 || row === height) {
                goingDown = false
                if (row === height) {
                    col++
                } else {
                    row++
                }
            } else {
                row++
                col--
            }
        } else {
            // check if in top of array
            if (row === 0 || col === width) {
                goingDown = true
                if (col === width) {
                    row++
                } else {
                    col++
                }
            } else {
                row--
                col++
            }
        }
    }
    console.log(result)
    return result
  }

function isOutOfBounds(row, col, height, width) {
    // checks if the row is too far left or height is too height
    // checks if column is too far right or height is too low
    return row < 0 || row > height || col < 0 || col > width
}

zigzagTraverse(array)