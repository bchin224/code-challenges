// let k = 3
// let a = [-2,-1,0,1,2]

let k = 3
let a = [-1,-3,4,2]

function angryProfessor(k, a) {
    let onTime = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) { onTime++ }
    }
    console.log('K is: ', k)
    console.log('a is: ', a)
    console.log('onTime is: ', onTime)
    console.log(onTime >= k ? 'NO' : 'YES')

    // if (onTime >= k) {
    //     console.log('yes')
    //     return 'YES'
    // } else {
    //     console.log('no')
    //     return 'NO'
    // }
}

angryProfessor(k, a)