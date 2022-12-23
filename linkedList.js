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
        while(currentNode){
            if (currentNode.data === data){
                return true 
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    length(){ 
        let currentNode = this.head
        let nodeCounter = 0
        while(currentNode){
        currentNode = currentNode.nextNode
        nodeCounter++
        }
        return nodeCounter
    }
}

// Question 2: Cycle Check
const isCyclic = (headNode) => { 
   let currentNode = headNode.nextNode
        while(currentNode){
            if (currentNode === headNode){
                return true 
            }
            currentNode = currentNode.nextNode
        }
        return false
};

// Question 3: Reverse a Linked List
const reverse = (headNode) => { 
  let after = null
  let current = headNode
  let before = null
  while(current){
      after = current.next
      current.next = before
      before = current
      current = after
  }
  headNode = before
  return headNode
};

// Question 4: Merge Two Lists
const mergeLists = (head1, head2) => { 
    
};

// Question 5: Remove duplicates
const removeDuplicates = (headNode) => { 
    //returns the headNode
};

module.exports = {
    Node, LinkedList, isCyclic, reverse, mergeLists, removeDuplicates
}