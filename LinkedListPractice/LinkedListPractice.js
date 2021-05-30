
// Doubly linked list

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    // Create linked list methods
    // add to end of list (the tail)
    append(value) {
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.previous = oldTail
        }
    }

    // add to the beginning of list (the head)
    prepend(value) {
        // if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }

    // delete the head
    deleteHead() {
        // if list is empty
        if (!this.head) {
            return null
        } else {
            let removeHead = this.head
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }

    // delete the tail
    deleteTail() {
        // if list is empty
        if (!this.tail) {
            return null
        } else {
            let removedTail = this.tail
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.value
        }
    }

    // search the linked list (traverse)
    search(value) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
    
}

// create node class
class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)

list.search(7)
list.search(5)

console.log(list.search(5))