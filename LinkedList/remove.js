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

    remove(data) {
        if (this.head === null) {
            return; 
        }

        
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;

       
        while (current !== null && current.data !== data) {
            previous = current;
            current = current.next;
        }

        
        if (current !== null) {
            previous.next = current.next;
        }
    }
}

let list = new LinkedList();

list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(5);

console.log(list.toArray()); 

list.remove(3);

console.log(list.toArray()); 
