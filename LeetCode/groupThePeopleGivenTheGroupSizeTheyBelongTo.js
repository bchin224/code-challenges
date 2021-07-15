Input: groupSizes = [3,3,3,3,3,1,3]

var groupThePeople = function(groupSizes) {
    let result = []
    
    let groups = {}
    
    for (let i = 0; i < groupSizes.length; i++) {
        if (!groups[groupSizes[i]]) {
            groups[groupSizes[i]] = [i]
        } else {
            groups[groupSizes[i]].push(i)
        }
        
        // if the group length = the value
        if (groups[groupSizes[i]].length === groupSizes[i]) {
        // add the key to the result
        result.push(groups[groupSizes[i]])
        //
        groups[groupSizes[i]] = []
        }
    }
    console.log(result)
    return result
};


// Output: [[5],[0,1,2],[3,4,6]]