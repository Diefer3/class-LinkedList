// class Node {  // Corrige el nombre de la clase (convención: mayúscula inicial)
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {  // Corrige el nombre de la clase (convención: mayúscula inicial)
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }
//     getSize(){
//         return this.size
//     }
//     prepend (value){
//         const node = new Node(value)
//         if (this.isEmpty()){
//             this.head = node
//         }else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
// }

// const list = new LinkedList()

// console.log("¿esta vacia la lista?", list.isEmpty())
// console.log("¿esta vacia la lista?", list.getSize())


// list.prepend(6)
// list.prepend(8)
// list.prepend(18)


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

        print() {
            if (this.isEmpty()) {
                console.log("Lista vacía");
            } else {
                let curr = this.head;  // Apuntamos al primer nodo
                let listValue = "";  // Variable para almacenar los valores

                while (curr) {  // Recorremos la lista
                    listValue += curr.value + " -> ";  // Agregamos el valor del nodo
                    curr = curr.next;  // Pasamos al siguiente nodo
                }

                listValue += "null";  // Indicamos el final de la lista
                console.log(listValue);  // Imprimimos la lista
            }
        }
    }
    list.print()
    list.prepend (6)
    list.print ()
    7
    list.prepend (10)
    list.prepend (14)
    list.prepend (8)
    list.print()


// Ejemplo de uso
// const lista = new LinkedList();
// lista.print(); // "Lista vacía"

// lista.head = new Node(10);
// lista.head.next = new Node(20);
// lista.size = 2;

// lista.print(); // "10 -> 20 -> null"

