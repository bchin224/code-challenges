p = [4,3,5,1,2]

function permutationEquation(p) {
    let result = []
    for (let i = 1; i <= p.length; i++) {
       result.push(p.indexOf(p.indexOf(i)+1)+1)
    }
    return result.map((index) => index)
}

permutationEquation(p)

// function permutationEquation(p) {
//     for (let i = 1; i <= p.length; i++) {
//        console.log(p.indexOf(p.indexOf(i)+1)+1) 
//     }
// }