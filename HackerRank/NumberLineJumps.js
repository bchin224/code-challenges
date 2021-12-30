let x1 = 0
let v1 = 3
let x2 = 4
let v2 = 2

function kangaroo(x1, v1, x2, v2) {
    // x1 + (y*v1) === x2 + (y*v2)
    let i = 1
    while (i < 100000) {
        if ((x1 + (i*v1)) === (x2 + (i*v2))) {
            return 'YES'
        } else {
            i++
        }
    }
    return 'NO'
}

kangaroo(x1, v1, x2, v2)