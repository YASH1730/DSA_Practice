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

    addNode(data) {
        let newNode = this.createNewNode(data);

        if (!this.head) {
            return this.head = newNode;
        }

        let lastNode = this.getLastNode();
        lastNode.next = newNode;

        return this.head;
    }
}


let list = new linkList();

[1, 2.5, 'A', "Yashwnat Sahu", [1, 2, 3, 5], null, true].map(item => { list.addNode(item) });

list.printAllData();

list.size();