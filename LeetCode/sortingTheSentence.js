s = "is2 sentence4 This1 a3"

var sortSentence = function(s) {
    let original = []
    let shuffled = s.split(' ')
    const newMap = new Map()
    for (let i = 0; i < shuffled.length; i++) {
        newMap.set(parseInt(shuffled[i][shuffled[i].length-1]), shuffled[i])
    }
    for (let j = 1; j <= shuffled.length; j++) {
        original.push(newMap.get(j))
    }
    return original.join(' ').replace(/\d/g,'')
};

sortSentence(s)