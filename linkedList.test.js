const { Node, LinkedList, isCyclic, reverse, mergeLists, removeDuplicates } =  require('./linkedList.js');

describe('Node', () => {
    it('has properties data and next', () => {
        let node = new Node();
        expect(node.data).toEqual(null);
        expect(node.next).toEqual(null);
        let node2 = new Node(5);
        expect(node2.data).toEqual(5);
        expect(node2.next).toEqual(null);
    })
})

describe('LinkedList', () => {
    it('has property head', () => {
        let list = new LinkedList();
        expect(list.head).toEqual(null);
    })

    it('can append to tail for empty list', () => {
        let list = new LinkedList();
        list.appendToTail(4);
        expect(list.head.data).toEqual(4);
        expect(list.head.next).toEqual(null);
    })

    it('can append to tail for non-empty list', () => {
        let list = new LinkedList();
        list.appendToTail(4);
        expect(list.head.data).toEqual(4);
        expect(list.head.next).toEqual(null);
        list.appendToTail(5);
        expect(list.head.next.data).toEqual(5);
        expect(list.head.next.next).toEqual(null);
    })

    it('can prepend to head for empty list', () => {
        let list = new LinkedList();
        list.prependToHead(4);
        expect(list.head.data).toEqual(4);
        expect(list.head.next).toEqual(null);
    })

    it('can prepend to head for non-empty list', () => {
        let list = new LinkedList();
        list.prependToHead(4);
        expect(list.head.data).toEqual(4);
        expect(list.head.next).toEqual(null);
        list.prependToHead(5);
        expect(list.head.data).toEqual(5);
        expect(list.head.next.data).toEqual(4);
        expect(list.head.next.next).toEqual(null);
    })

    it('can remove the head and return its data', () => {
        let list = new LinkedList();
        list.prependToHead(4);
        list.prependToHead(5);
        expect(list.removeHead()).toEqual(5);
        expect(list.head.data).toEqual(4);
        expect(list.removeHead()).toEqual(4);
        expect(list.head).toEqual(null);
    })

    it('can check if data is in the list', () => {
        let list = new LinkedList();
        list.prependToHead(3);
        list.prependToHead(2);
        list.prependToHead(1);
        expect(list.contains(2)).toEqual(true);
        expect(list.contains(1)).toEqual(true);
        expect(list.contains(3)).toEqual(true);
        expect(list.contains(4)).toEqual(false);
    })

    it('can return the length of the list', () => {
        let list = new LinkedList();
        expect(list.length()).toEqual(0);
        list.prependToHead(5);
        list.prependToHead(6);
        list.prependToHead(7);
        expect(list.length()).toEqual(3);
        list.prependToHead(8);
        expect(list.length()).toEqual(4);
    })

})

describe('isCyclic', () => {
    it('returns false for non cycle', () => {
        let firstNode = new Node(1);
        let secondNode = new Node(2);
        let thirdNode = new Node(3);
        firstNode.next = secondNode;
        secondNode.next = thirdNode;
        expect(isCyclic(firstNode)).toEqual(false);
    })

    it('returns true for cycle', () => {
        let firstNode = new Node(1);
        let secondNode = new Node(2);
        let thirdNode = new Node(3);
        firstNode.next = secondNode;
        secondNode.next = thirdNode;
        thirdNode.next = firstNode;
        expect(isCyclic(firstNode)).toEqual(true);
    })
})

describe('reverse', () => {
    it('reverses a linkedlist', () => {
        let firstNode = new Node(1);
        let secondNode = new Node(2);
        let thirdNode = new Node(3);
        firstNode.next = secondNode;
        secondNode.next = thirdNode;
        firstNode = reverse(firstNode);
        expect(firstNode.data).toEqual(3);
        expect(firstNode.next.data).toEqual(2);
        expect(firstNode.next.next.data).toEqual(1);
    })
})

describe('mergeLists', () => {
    it('merges two linked lists', () => {
        let firstNode = new Node(1);
        let secondNode = new Node(2);
        let thirdNode = new Node(4);
        firstNode.next = secondNode;
        secondNode.next = thirdNode;

        let fourthNode = new Node(1);
        let fifthNode = new Node(3);
        let sixthNode = new Node(4);
        fourthNode.next = fifthNode;
        fifthNode.next = sixthNode;

        firstNode = mergeLists(firstNode, fourthNode);
        expect(firstNode.data).toEqual(1);
        expect(firstNode.next.data).toEqual(1);
        expect(firstNode.next.next.data).toEqual(2);
        expect(firstNode.next.next.next.data).toEqual(3);
        expect(firstNode.next.next.next.next.data).toEqual(4);
        expect(firstNode.next.next.next.next.next.data).toEqual(4);
    })
})

describe('removeDuplicates', () => {
    it('removed duplicates', () => {
        let firstNode = new Node(1);
        let secondNode = new Node(2);
        let fourthNode = new Node(1);
        let thirdNode = new Node(3);
        let fifthNode = new Node(4);
        let sixthNode = new Node(2);
        let seventhNode = new Node(1);

        firstNode.next = secondNode;
        secondNode.next = thirdNode;
        thirdNode.next = fourthNode;
        fourthNode.next = fifthNode;
        fifthNode.next = sixthNode;
        sixthNode.next = seventhNode;

        firstNode = removeDuplicates(firstNode);

        expect(firstNode.data).toEqual(1);
        expect(firstNode.next.data).toEqual(2);
        expect(firstNode.next.next.data).toEqual(3);
        expect(firstNode.next.next.next.data).toEqual(4);
    })
})
