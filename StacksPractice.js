class Stack {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
    }

    remove() {
        this.data.pop()
    }

    displayInfo() {
        console.log(this.data)
    }
}

let newStack = new Stack()
newStack.add(200)
newStack.add(2150)
newStack.add(90)
newStack.add(14)

newStack.displayInfo()

newStack.add(9000)
newStack.displayInfo()
newStack.remove()
newStack.displayInfo()
newStack.remove()
newStack.displayInfo()
newStack.remove()
newStack.displayInfo()
newStack.remove()
newStack.displayInfo()