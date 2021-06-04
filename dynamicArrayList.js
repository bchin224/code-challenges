// dynamic array list
class ArrayList {
    constructor(size) {
        this.array = Array(size).fill(0)
    }

    add(val) {
        if (this.array.length < this.size) {
        } else {
            this.size = this.size * 2
        }
        return this.array
    }

    set(index, val) {
        if (this.array.length < this.size) {
        } else {
        }
        return this.array
    }

    get(index) {
        if (index > this.size) {
            return null
        } else {
            return this.array[index]
        }
    }

    length() {
        return this.array.length
    }
}

const newArray = new ArrayList(5)
// newArray.add(1)
// newArray.add(2)
// newArray.add(3)
// newArray.add(4)
// newArray.add(5)
// newArray.add(6)
// newArray.add(7)
// newArray.add(8)
// newArray.add(9)
// newArray.add(10)
// // size should double
// newArray.add(11)

console.log(newArray)

