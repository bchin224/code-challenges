// done in )(n) time
// if you can determine which city has the minimum amount of gas, that will be the answer
// this only works because we know there is exactly 1 solution
// start at index 0, then just return the index of the city that you enter with the least gas

distances = [5,25,15,10,15]
fuel = [1,2,1,0,3]
mpg = 10

function validStartingCity(distances, fuel, mpg) {
    const numberOfCities = distances.length
    let milesRemaining = 0

    let indexStartingCity = 0
    let milesRemainingAtStartingCity = 0

    for (let currCityIdx = 1; currCityIdx < numberOfCities; currCityIdx++) {
        const distanceFromPrevCity = distances[currCityIdx - 1]
        const fuelFromPrevCity = fuel[currCityIdx - 1]
        milesRemaining += fuelFromPrevCity * mpg - distanceFromPrevCity

        if (milesRemaining < milesRemainingAtStartingCity) {
            milesRemainingAtStartingCity = milesRemaining
            indexStartingCity = currCityIdx
        }
    }
    console.log(indexStartingCity)
    return indexStartingCity
  }

  validStartingCity(distances, fuel, mpg)
  // should return 4