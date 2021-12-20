let n = 6

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - i - 1)
        let hashes = '#'.repeat(i + 1)
        console.log(spaces + hashes)
    }

}

staircase(n)