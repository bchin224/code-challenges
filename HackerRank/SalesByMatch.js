let n = 9
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    let pairs = 0
    let sortedAR = ar.sort((a,b) => a - b)
    for (let i = 0; i < n; i++) {
        if (sortedAR[i] === sortedAR[i+1]) {
            pairs++
            i++
        }
    }
    console.log(pairs)
    return pairs
}

sockMerchant(n, ar)