class Queue {
    constructor() {
        this.queue = []
    }

    add(data) {
        this.queue.splice(0,0,data)
    }

    remove() {
        this.queue.pop()
    }

    length() {
        console.log('There are ', this.queue.length, ' people in this queue.')
    }

    displayInfo() {
        console.log('The current queue is ', this.queue)
    }

    front() {
        console.log(`${this.queue[this.queue.length - 1]} is at the front of the queue`)
    }
}

let newQueue = new Queue()
newQueue.add('Chad')
newQueue.add('Todd')
newQueue.add('Tanner')
newQueue.add('Barney')
newQueue.displayInfo()
newQueue.remove()
newQueue.add('Gargamel')
newQueue.length()
newQueue.front()
newQueue.remove()
newQueue.displayInfo()
newQueue.front()


