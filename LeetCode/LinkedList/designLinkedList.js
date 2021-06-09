const assert = require('assert')

/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.size = 0
};

var Node = function(val) {
    this.val = val
    this.next = null
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.size - 1 || index < 0) {
        return -1
    }
    // this.head should always point to a node, not to a specific value
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
        // currentNode.next is just a pointer to the next node
        // still need to use .next.val to target the next value
        currentNode = currentNode.next
    }
    // console.log(`At ${index}, the node was: ${currentNode.val}`)
    return currentNode.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val)
    // if empty
    if (!this.head) {
        // make sure to assign tail as well
        this.head = this.tail = newNode
    } else {
        // if not empty, set new node's next to old head
        newNode.next = this.head
        // make new node the head
        this.head = newNode
    }
    this.size++
    return this
    
};

/**
 * Append a node of value val to the last element of the linked list. 
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // make new node
    const newNode = new Node(val)
    // if empty create the node and assign head and tail
    if (!this.tail) {
        this.head = this.tail = newNode
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.size++
    return this
};

/**
 * Add a node of value val before the index-th node in the linked list.
 * If index equals to the length of linked list, the node will be appended
 * to the end of linked list. If index is greater than the length, the node will not be inserted. 
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newNode = new Node(val)
    if (index > this.size) {
        return
    } else if (index <= 0) {
        return this.addAtHead(val)
    } else if (index === this.size) {
        return this.addAtTail(val)
    }
    
    let prevNode = this.head
    for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next
    }
    newNode.next = prevNode.next ? prevNode.next : null
    prevNode.next = newNode
    this.size++
    console.log('add index: ', this)
    return this
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size || index < 0) {
        return
    } if (index === 0) {
        this.head = this.head.next
        this.size--
        return this
    } else {
        let currentNode = this.head
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next
        }
        currentNode.next = currentNode.next.next ? currentNode.next : null
        if (!currentNode.next) {
            this.tail = currentNode
        }
        this.size--
        // console.log(currentNode.val)
        return currentNode.val
    }
    
};
// testing
// case 1
let myList = new MyLinkedList()

assert(myList.get(0) === -1)
myList.addAtHead(5)
// assert(myList.get(0) === 5)
myList.addAtHead(8)
// assert(myList.get(0) === 8)
// assert(myList.get(1) === 5)
// assert(myList.get(-1) === -1)
myList.addAtHead(14)
myList.addAtHead(100000)
myList.addAtHead(4)

// // case 2
// myList = new MyLinkedList()
myList.addAtTail(80)
assert(myList.get(5) === 80)

// // case 3
// myList = new MyLinkedList()
// assert(myList.addAtIndex(1,9) === 9)


/*
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/