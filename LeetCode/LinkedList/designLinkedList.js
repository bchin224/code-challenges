// class Node {
//     constructor(val, next, prev) {
//         this.val = val || null
//         this.next = next || null
//         this.prev = prev || null
//     }
// }

// class MyLinkedList {
//     // implement the linked list
//     constructor() {
//         this.head = new Node()
//         this.tail = new Node()
//         this.size = 0
//         this.head.next = this.tail
//         this.tail.prev = this.head
//     }
    
//     get(index) {
//         if (index < 0 || index >= index.size) {
//             return -1
//         }
        
//         let currNode = this.head.next
//         // decrement the index until it's zero (falsy)
//         while (index--) {
//             currNode = currNode.next
//         }
//         return currNode.val
//     }
    
//     addAtHead(val) {
//         // prev is just the head
//         let prev = this.head
//         // next will give 1st value
//         let next = this.head.next
//         // create new node that's pointing to the
//         // correct next nodes already
//         let node = new Node(val, prev, next)
//         // have pointers point at new node
//         prev.next = node
//         next.prev = node
//         this.size++
//     }
    
//     addAtTail(val) {
//         let prev = this.tail.prev
//         let next = this.tail
        
//         let node = new Node(val, prev, next)
//         prev.next = node
//         next.prev = node
//         this.size++
//     }
    
//     addAtIndex(index, val) {
//         if (index < 0 || index > this.size) return null
//         if (index === this.length) {
//             this.addAtTail(val)
//             return
//         }
//         let prev = this.head
        
//         while(index--) {
//             prev = prev.next
//         }
        
//         let next = prev.next
        
//         let node = new Node(val, next, prev)
//         prev.next = node
//         next.prev = node
//         this.size++
//     }
    
//     deleteAtIndex(index) {
//         if (index < 0 || index >= this.size) return null
        
//         let prev = this.head
//         while(index--) {
//             prev = prev.next
//         }
//         let next = prev.next.next
        
//         prev.next = next
//         next.prev = prev
        
//         this.length--
//     }    
// }



/**
 * Function version
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
    this.head = this.tail = null
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
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
        currentNode = currentNode.next
    }
    return currentNode
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val)
    // if empty
    if (!this.head) {
        this.head = newNode
        this.next = newNode
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
    // if empty
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
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
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
