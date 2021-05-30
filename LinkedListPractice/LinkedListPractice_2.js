// create node class that takes data and pointer
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next || null
    }
}

// create linked list
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    // method that adds node to the end of list (create if empty)
    append(data) {
        if (!this.tail) {
            this.head = this.tail = new Node(data)
            this.size++
        } else {
            let oldTail = this.tail
            this.tail = new Node(data)
            oldTail.next = this.tail
            this.size++
        }
    }

    // method that adds node to the beginning of list (create if empty)
    prepend(data) {
        if (!this.head) {
            this.head = this.tail = new Node(data)
            this.size++
        } else {
            let oldHead = this.head
            this.head = new Node(data)
            this.head.next = oldHead
            this.size++
        }
    }

    // method that deletes head from list
    removeHead() {
        // if list is empty
        if (!this.head) {
            return null
        } else {
            // if there's only 1 node
            if (this.tail === this.head) {
                this.tail = this.head = null
                this.size--
            } else {
                this.head = this.head.next
                this.size--
            }
        }
    }

    // remove a node that isn't the head
    removeNode(node) {
        // if list is empty
        // removed will be to actually remove a target node
        let prevNode
        // currentNode will iterate through the list to find the right node
        let currentNode = this.head
        // while this.head exists checks that list isn't empty
        while (currentNode) {
            // check if current node is the one we want to remove
            if (currentNode.data === node) {
                // if it is, remove the node
                if (currentNode === this.tail) {
                    this.tail = prevNode
                }
                if (!prevNode) {
                    this.head = currentNode.next
                } else {
                    prevNode.next = currentNode.next
                }
                // decrease the count
                this.size--
                // break the function
                console.log(`${currentNode.data} has been removed`)
                return 
            } else {
            // advance currentNode for next iteration
            prevNode = currentNode
            currentNode = currentNode.next
            }
        }
        this.size--
    }
}

const xmen = new LinkedList()

xmen.append('cyclops')
xmen.append('nightcrawler')
xmen.append('storm')
xmen.append('wolverine')
xmen.append('beast')
xmen.prepend('charles xavier')

xmen.removeHead()
xmen.removeNode('nightcrawler')

console.log(xmen)