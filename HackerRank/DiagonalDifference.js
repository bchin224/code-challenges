let arr = [
[1, 2, 3],
[4, 5, 6],
[9, 8, 9]]

function diagonalDifference(arr) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i]
        sum2 += arr[i][arr.length - i - 1]
    }
    console.log(Math.abs(sum1-sum2))
}

diagonalDifference(arr)