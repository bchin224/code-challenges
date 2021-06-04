/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.parkingLot = [big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (this.parkingLot[carType - 1] > 0) {
        this.parkingLot[carType - 1]--
        return true
    } else {
        return false
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// Version in one line of code for addCar
// var ParkingSystem = function(big, medium, small) {
//     this.parkingLot = [big, medium, small]
// };

// /** 
//  * @param {number} carType
//  * @return {boolean}
//  */
// ParkingSystem.prototype.addCar = function(carType) {
//     return this.parkingLot[carType - 1]-- > 0
// };