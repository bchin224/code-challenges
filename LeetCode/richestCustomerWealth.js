Input: accounts = [[1,5],[7,3],[3,5]]

// slow, O(n^2) TC, O(1) SC
var maximumWealth = function(accounts) {
    let maxWealth = 0
    let custWealth = 0
    for (let i = 0; i < accounts.length; i++) {
        custWealth = accounts[i].reduce((a,b) => a+b)
        if (custWealth > maxWealth) {
            maxWealth = custWealth
        }
    }
    return maxWealth
};

maximumWealth(accounts)