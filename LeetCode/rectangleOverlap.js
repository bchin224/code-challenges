rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// rec1 = [0,0,1,1], rec2 = [1,0,2,1]
rec1 = [4,0,6,6], rec2 = [-5,-3,4,2]

var isRectangleOverlap = function(rec1, rec2) {
    // for rec2 to overlap rec1, rec 2's bottom left must be less than rec 1's top right
    // and rec 2's top right must be greater than rec1's bottom left
    // console.log(rec1[0] < rec2[2] && rec1[1] < rec2[3] && rec2[0] < rec1[2] && rec2[1] < rec1[3])
    // this compares the right and left edges of each rect and then the top and bottom edges
    return rec1[0] < rec2[2] && rec1[1] < rec2[3] && rec2[0] < rec1[2] && rec2[1] < rec1[3]
};

isRectangleOverlap(rec1, rec2)