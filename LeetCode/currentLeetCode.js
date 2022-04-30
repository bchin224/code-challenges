n = 6

function staircase(n) {
    for (let i=0; i<n; i++) {
        let spaces = n - i - 1
        console.log((' '.repeat(spaces)) + ('#'.repeat(i+1)))
    }
}

staircase(n)