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

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;

        while (current != null) {
            next = current.next;  
            current.next = previous; 
            previous = current;     
            current = next;
        }

        this.head = previous;
    }
}

let list = new LinkedList();

list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);

console.log(list.toArray()); 

list.reverse();

console.log(list.toArray()); 