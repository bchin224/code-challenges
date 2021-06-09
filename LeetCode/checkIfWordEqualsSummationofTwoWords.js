Input: firstWord = "j", secondWord = "j", targetWord = "bi"
// Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"

var isSumEqual = function(firstWord, secondWord, targetWord) {
    let alphabet = {
        'a' : '0',
        "b" : '1',
        "c" : '2',
        "d" : '3',
        "e" : '4',
        'f' : '5',
        'g' : '6',
        'h' : '7',
        'i' : '8', 
        "j" : '9'
    }
    let first = ''
    let second = ''
    let target = ''

    for (let char of firstWord) {
        first += alphabet[char]
    }
    for (let char of secondWord) {
        second += alphabet[char]
    }
    for (let char of targetWord) {
        target += alphabet[char]
    }
    console.log(parseInt(first) + parseInt(second) === parseInt(target))
    return (parseInt(first) + parseInt(second) === parseInt(target))
};

isSumEqual(firstWord, secondWord, targetWord)