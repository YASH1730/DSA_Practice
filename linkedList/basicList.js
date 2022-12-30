// for combining all nodes and attached with the head
class linkList {
    constructor(head = null) {
        this.head = head;
    }

    createNewNode(data) {
        return { data, next: null };
    }

    printAllData() {
        let temp = this.head;

        if (!temp) console.log('List is empty!!!')

        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    getLastNode() {
        let temp = this.head; // this will make a copy og head 
        while (1) {
            if (temp.next === null) return temp;
            temp = temp.next;
        }
    }

    size() {
        let temp = this.head;
        let size = 0;
        while (temp) {
            temp = temp.next
            size++;
        }
        console.log(`Size of the list is ${size}`)
    }

    addNodeAtStart(data) {
        let newNode = this.createNewNode(data);

        if (!this.head) {
            return this.head = newNode;
        }

        let tempHead = this.head;
        newNode.next = tempHead;
        this.head = newNode;

        return this.head;
    }

    addNodeAtLast(data) {
        let newNode = this.createNewNode(data);

        if (!this.head) {
            return this.head = newNode;
        }

        let lastNode = this.getLastNode();
        lastNode.next = newNode;

        return this.head;
    }

    sort() {

    }
}


let l = new linkList();
let l2 = new linkList();

[1, 2, 4].map(item => { l.addNodeAtLast(item) });
[1, 2, 3].map(item => { l2.addNodeAtLast(item) });

let merged = new linkList();

let list = l.head;
let list2 = l2.head;

while (list && list2) {
    if (list.data > list2.data) {
        merged.addNodeAtLast(list2.data);
        list2 = list2.next;
    }
    else {
        merged.addNodeAtLast(list.data);
        list = list.next;
    }
}

merged.printAllData();