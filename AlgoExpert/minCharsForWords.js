words = ['this', 'that', 'did', 'deed', 'them!', 'a']

function minimumCharactersForWords(words) {
    let obj = {}
    let resultArr = []
    let currentWord = 0

    // iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // iterate through each letter in that word
        for (let j = 0; j < words[i].length; j++) {
            // if letter already exists, increase count
            if (obj[words[i][j]] && currentWord === i) {
                obj[words[i][j]]++
            } else { // else, create that letter in object
                obj[words[i][j]] = 1
            }
        }
        currentWord++
    }

    console.log(obj)

    console.log(resultArr)
  }


minimumCharactersForWords(words)
