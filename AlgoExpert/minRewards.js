scores = [8,4,2,1,3,6,7,9,5]
scores = [5,6,1,2,3,4,5]
scores = [3,5,1,67,83,4,8,2] // 15
scores = [0,4,2,1,3] // 9

function minRewards(scores) {
    const min = Math.min(...scores)
    const minIdx = scores.indexOf(min)
    let rewards = 1
    let currentRightIdx = minIdx + 1
    let currentRightReward = 1
    let currentLeftIdx = minIdx - 1
    let currentLeftReward = 1

    // traverse to the right of the minIdx
    for (let i = currentRightIdx; i <= scores.length; i++) {
        // if currentRightReward != 0, do this, if not do something else
        if (scores[i] > scores[i-1]) {
            currentRightReward++
            rewards += currentRightReward
        } else if (scores[i] < scores[i-1] && i === scores.length - 1) {
            rewards++
        } else if (scores[i] < scores[i-1]) {
            currentRightReward--
            rewards += currentRightReward
        }
        // console.log(`At ${i} currentRightReward is ${currentRightReward}` )
    }

    // traverse to the left of the minIdx
    for (let j = currentLeftIdx; j >= 0; j--) {
        if (scores[j] > scores[j+1]) {
            currentLeftReward++
            rewards += currentLeftReward
        } else if (scores[j] < scores[j+1] && j === 0) {
            rewards += 1
        } else if (scores[j] < scores[j+1]) {
            currentLeftReward--
            rewards += currentLeftReward
        }
        // console.log(`At ${j} currentLeftReward is ${currentLeftReward}` )
    }
    console.log(rewards)
    return rewards
}

minRewards(scores)


// O(n) TC, O(n) SC // optimal solution
function minRewards(scores) {
    const rewards = scores.map(_ => 1)
    for  (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1
    }
    for  (let i = scores.length - 2; i >= 0; i--) {
        if (scores[i] > scores[i + 1]) rewards[i] = Math.max(rewards[i], rewards[i+1])
    }
    return rewards.reduce((a,b) => a + b)
}