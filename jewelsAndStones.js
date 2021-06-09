Input: jewels = "aA", stones = "aAAbbbb"

var numJewelsInStones = function(jewels, stones) {
    const jewelCount = new Map()
    const stonesArray = stones.split('')
    let count = 0
    Array.from(jewels).map((jewels) => jewelCount.set(jewels, 1))
    for (let i = 0; i < stones.length; i++) {
        if (jewelCount.has(stonesArray[i])) {
            count++
        }
    }
    console.log(count)
    return count
};

numJewelsInStones(jewels, stones)