let x = "_nnnnnnn_n__n______nn__nn_nnn"

function bump(x){
    let bumps = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'n') {
            bumps++
        }
    }
    console.log(bumps > 15 ? "Car Dead" : "Woohoo!")
    return bumps > 15 ? "Car Dead" : "Woohoo!"
}

bump(x)