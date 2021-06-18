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
    if (this.size === 0 || index > this.size - 1 || index < 0) {
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
        this.head = newNode
        this.tail = newNode
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
    const newNode = new Node(val)
    // if empty create the node and assign head and tail
    if (!this.tail) {
        this.head = newNode
        this.tail = newNode
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
    }
    if (index <= 0) {
        return this.addAtHead(val)
    }
    if (index === this.size) {
        return this.addAtTail(val)
    }
    
    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next
    }
    // if currentNode.next is true and not null, set newnode.next to it
    // else if currentNode.next is false, set it to null
    newNode.next = currentNode.next ? currentNode.next : null
    currentNode.next = newNode
    this.size++
    return this
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size || index < 0) {
        return
    }
    if (index === 0) {
        this.head = this.head.next
        this.size--
        return
    } 
    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next
    }
    currentNode.next = currentNode.next.next ? currentNode.next.next : null
    if (!currentNode.next) {
        this.tail = currentNode
    }
    this.size--
    return
};
// testing
// case 1
// let myList = new MyLinkedList()

// assert(myList.get(0) === -1)
// myList.addAtHead(5)
// assert(myList.get(0) === 5)
// myList.addAtHead(8)
// // assert(myList.get(0) === 8)
// // assert(myList.get(1) === 5)
// // assert(myList.get(-1) === -1)
// myList.addAtHead(14)
// myList.addAtHead(100000)
// myList.addAtHead(4)

// // case 2
// myList = new MyLinkedList()
// myList.addAtTail(80)
// assert(myList.get(5) === 80)

// case 3
// myList = new MyLinkedList()
// myList.addAtIndex(0,5)
// assert(myList.get(0) === 5)
// myList.addAtIndex(1,9)
// assert(myList.get(1) === 9)
// myList.addAtIndex(2,77)

// // case 4
// myList.deleteAtIndex(2)
// assert(myList.get(1) === 77)

/*
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

// failing test case
myList = new MyLinkedList()
myList.addAtHead(7)
assert(myList.get(0) === 7)
myList.addAtHead(2)
assert(myList.get(0) === 2)
myList.addAtHead(1)
assert(myList.get(0) === 1)
myList.addAtIndex(3,0)
assert(myList.get(2) === 7)
myList.deleteAtIndex(2)
assert(myList.get(0) === 1)
assert(myList.get(1) === 2)
assert(myList.get(2) === 0)
myList.addAtHead(6)
assert(myList.get(0) === 6)
myList.addAtTail(4)
assert(myList.get(4) === 4)
myList.get(4)
myList.addAtHead(4)
assert(myList.get(0) === 4)
myList.addAtIndex(5,0)
assert(myList.get(5) === 0)
myList.addAtHead(6)
assert(myList.get(0) === 6)

