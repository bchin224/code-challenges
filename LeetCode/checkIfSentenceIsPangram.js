sentence = "uwqohxamknblecdtzpisgvyfjr"

var checkIfPangram = function(sentence) {
    const alphabet = new Map()
    let count = 0
    for (letter of sentence) {
        if (!alphabet[letter]) {
            alphabet[letter] = 1
            count++
        }
    }
    console.log(alphabet)
    console.log(count)
    return (count >= 26)
};

checkIfPangram(sentence)