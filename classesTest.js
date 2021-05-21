
// class declaration
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age
    }

    displayInfo() {
        return `This is ${this.name} and they are ${this.age} years old!`
    }

    what() {
        return `${this.name} is a personalbar.`
    }
}

// extended class
class Student extends Person{
    what() {
        return `${this.name} is a student!`
    }
}

// class expession (unnamed)
const Car = class {
    constructor(brand, name, year) {
        this.brand = brand;
        this.name = name;
        this.year = year
    }
    displayInfo() {
        return `This car is a ${this.brand} ${this.name} made in ${this.year}.`
    }
}
