
class Node {
    constructor(value) {
        this.value = value;  
        this.next = null; 
    }
}


class LinkedList {
    constructor() {
        this.head = null; 
        this.size = 0; 
    }

    
    isEmpty() {
        return this.size === 0;
    }


    getSize() {
        return this.size;
    }

    
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    
    print() {
        if (this.isEmpty()) {
            console.log("La fila está vacía");
        } else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += curr.value + " -> ";
                curr = curr.next;
            }
            listValues += "null";
            console.log(listValues);
        }
    }
}


const filaBanco = new LinkedList();


filaBanco.prepend("Lina");
filaBanco.prepend("Angélica");
filaBanco.prepend("Víctor");
filaBanco.prepend("José");
filaBanco.prepend("María");


console.log("Fila del banco antes de agregar a Diego:");
filaBanco.print();


filaBanco.prepend("Diego");


console.log("Fila del banco después de agregar a Diego:");
filaBanco.print();
