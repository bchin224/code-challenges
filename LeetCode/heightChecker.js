heights = [1,2,3,4,5]

var heightChecker = function(heights) {
    let counter = 0
    let copyHeights = [...heights]
    let sorted = copyHeights.sort((a,b) => a-b)
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != sorted[i]) {
            // console.log(heights[i], sorted[i])
            counter++
        }
    }
    console.log(counter)
};

heightChecker(heights)