// 📌 1️⃣ Definir el nodo (Cada persona en la fila)
class Node {
    constructor(value) {
        this.value = value;  // El nombre de la persona
        this.next = null;  // Apunta al siguiente en la fila
    }
}

// 📌 2️⃣ Definir la lista enlazada (La fila del banco)
class LinkedList {
    constructor() {
        this.head = null;  // La fila comienza vacía
        this.size = 0;  // Contador de personas en la fila
    }

    // 📌 3️⃣ Método para verificar si la fila está vacía
    isEmpty() {
        return this.size === 0;
    }

    // 📌 4️⃣ Método para obtener la cantidad de personas en la fila
    getSize() {
        return this.size;
    }

    // 📌 5️⃣ Método para agregar una persona al inicio de la fila
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

    // 📌 6️⃣ Método para imprimir la fila del banco
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

// 📌 7️⃣ Crear la fila del banco
const filaBanco = new LinkedList();

// 📌 8️⃣ Agregar personas a la fila
filaBanco.prepend("Lina");
filaBanco.prepend("Angélica");
filaBanco.prepend("Víctor");
filaBanco.prepend("José");
filaBanco.prepend("María");

// 📌 9️⃣ Imprimir la fila inicial
console.log("Fila del banco antes de agregar a Diego:");
filaBanco.print();

// 📌 🔟 Agregar a Diego al inicio de la fila
filaBanco.prepend("Diego");

// 📌 1️⃣1️⃣ Imprimir la fila después de agregar a Diego
console.log("Fila del banco después de agregar a Diego:");
filaBanco.print();
