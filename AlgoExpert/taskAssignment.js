k = 3
tasks = [1,3,5,3,1,4]

function taskAssignment(k, tasks) {
    let newTasks = new Map()
    for (let i = 0; i < tasks.length; i++) {
        newTasks.set(tasks[i])
    }
    tasks.sort((a,b) => a - b)
    let result = []
    let longestTime = tasks[tasks.length-1]
    for (let i = 0; i < k; i++) {
        if (i < longestTime) {
            result.push([i, longestTime])
            longestTime--
        }
    }
    console.log(tasks)
    console.log(result)
  }

taskAssignment(k,tasks)

// function taskAssignment(k, tasks) {
//     tasks.sort((a,b) => a - b)
//     let result = []
//     let longestTime = tasks[tasks.length-1]
//     for (let i = 0; i < k; i++) {
//         if (i < longestTime) {
//             result.push([i, longestTime])
//             longestTime--
//         }
//     }
//     console.log(tasks)
//     console.log(result)
//   }
 