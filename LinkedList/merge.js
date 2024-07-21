class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    insertAtTail(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    static mergeSortedLists(list1, list2) {
        let dummy = new Node(0); 
        let tail = dummy;

        let l1 = list1.head;
        let l2 = list2.head;

        while (l1 !== null && l2 !== null) {
            if (l1.data <= l2.data) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

      
        if (l1 !== null) {
            tail.next = l1;
        } else if (l2 !== null) {
            tail.next = l2;
        }

        let mergedList = new LinkedList();
        mergedList.head = dummy.next;
        return mergedList;
    }
}

function createLinkedListFromArray(arr) {
    let list = new LinkedList();
    arr.forEach(element => {
        list.insertAtTail(element);
    });
    return list;
}

let list1 = createLinkedListFromArray([1, 3, 5]);
let list2 = createLinkedListFromArray([2, 4, 6]);

console.log(list1.toArray()); 
console.log(list2.toArray()); 

let mergedList = LinkedList.mergeSortedLists(list1, list2);
console.log(mergedList.toArray()); 
