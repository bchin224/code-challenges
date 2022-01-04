let n = 3

function viralAdvertising(n) { 
    let result = 0
    let start = 5
    for (let i = 1; i <= n; i++) {
        result += Math.floor(start/2)
        start = Math.floor(start/2) * 3
    }
    console.log(result)
}

viralAdvertising(n)