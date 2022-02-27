a = [2,3,1]

function largestCountValue(a) {
    if (a < 2) {
        return a
    }
    let count = 0

    let midpoint = Math.ceil(a.length / 2)
    let left = a.slice(0,midpoint)
    let right = a.slice(midpoint,a.length)

    console.log(left)
}

largestCountValue(a)