// Question 1: Implement a Linked List

class Node {
    constructor(data = null){
        this.data = data;
        this.next = null
    }
    setNextNode(node){
        this.next = node
    }
    get nextNode(){
        return this.next
    }
}

class LinkedList {
    constructor() {
    this.head = null
    }
    
    appendToTail(data){ 
        let tail = this.head
        if(!tail){
            this.head = new Node(data)
        }else{
            while(tail.nextNode !== null){
                tail = tail.nextNode
            }
            tail.setNextNode(new Node(data))
        }
    }

    prependToHead(data){ 
        let newHead = new Node(data);
        let currentHead = this.head;
        this.head = newHead
        if(currentHead){
            this.head.setNextNode(currentHead)
        }
    }
    
    removeHead() { 
       let removedHead = this.head
       if(!removedHead){
          return 
       }else{
           this.head = removedHead.nextNode
           return removedHead.data
       }
    }
 // returns true is any Node in the LinkedList contains the value data, false otherwise
    contains(data){ 
       let currentNode = this.head
        if(currentNode){
            while(currentNode.data != data){
                currentNode = currentNode.nextNode
            }
            return currentNode.data === data ? true : false
        }
    }

    length(){ 
        //returns the length of the LinkedList as an integer value
    }
}

// Question 2: Cycle Check
const isCyclic = (headNode) => { 
    //returns true is the list has a cycle, false otherwise
};

// Question 3: Reverse a Linked List
const reverse = (headNode) => { 
    //returns the new headNode
};

// Question 4: Merge Two Lists
const mergeLists = (head1, head2) => { 
    //returns the head node of the merged linked list
};

// Question 5: Remove duplicates
const removeDuplicates = (headNode) => { 
    //returns the headNode
};

module.exports = {
    Node, LinkedList, isCyclic, reverse, mergeLists, removeDuplicates
}