function processData(input) {
    const arrival = [900, 910, 940]
    const departure = [920, 950, 1000]
    
    // declare variables
    let maxPlatforms = 1
    let currArrivingTrain = 1
    let departingTrain = 0
    
    // Iterating through arrival times
    for (let i = 0; i < arrival.length; i++) {
        // Determine if the arrival time of a train is
        // earlier than the departure time of the prev train
        let currentPlatforms = 1
        for (let j = i + 1; j < arrival.length; j++) {
            if (departure[i] >= arrival[j]) {
                currentPlatforms++
            }
            maxPlatforms = Math.max(maxPlatforms, currentPlatforms)
        }
    }
    console.log(maxPlatforms)
    return maxPlatforms

    // if !prev departure time, then skip
    
    // if prev train departure time is greater than
    // current train's arrival time, add a platform
    
    // return the number of platforms
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
