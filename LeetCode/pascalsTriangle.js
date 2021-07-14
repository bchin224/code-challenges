// Pascal's triangle

//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1

Input: numRows = 5

var generate = function(numRows) {
    let triangle = []
    // first and last row elements always 1
    for (let i = 0; i < numRows; i++) {
        // create an empty row
        triangle[i] = []
        // initialize beginning of row to 1
        triangle[i][0] = 1
        // inner loop only starts after j < i (so after i goes up to 2)
        for (let j = 1; j < i; j++) {
            // this iterates through each row and sums up the value
            // in the previous row with an index before and the same index
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
        // set end of row to 1
        triangle[i][i] = 1
    }
    console.log(triangle)
    return triangle
};

generate(numRows)