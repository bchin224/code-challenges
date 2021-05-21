matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 311, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
]

target = 44

function searchInSortedMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(target)) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === target) {
                    console.log([i,j])
                }
            }
        }
    }
    console.log([-1,-1])
}

searchInSortedMatrix(matrix,target)

  // Do not edit the line below.
  exports.searchInSortedMatrix = searchInSortedMatrix;