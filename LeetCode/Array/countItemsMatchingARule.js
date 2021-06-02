Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],
ruleKey = "type", ruleValue = "phone"

// using filter, same TC and SC. Actually slower
var countMatches = function(items, ruleKey, ruleValue) {
    const map = {
        'type': 0,
        'color': 1,
        'name': 2
    }
    return items.filter(i => i[map[ruleKey]] == ruleValue).length
};

countMatches(items, ruleKey, ruleValue)

// O(n) TC, O(1) SC
// var countMatches = function(items, ruleKey, ruleValue) {
//     let count = 0
//     for (let i = 0; i < items.length; i++) {
//         if (ruleKey === 'type' && items[i][0] === ruleValue) {
//             count++
//         } else if (ruleKey === 'color' && items[i][1] === ruleValue) {
//             count++
//         } else if (ruleKey === 'name' && items[i][2] === ruleValue) {
//             count++
//         }
//     }
//     return count
// };