// Node creation
function createNode(data) {
    return {
        data: data,
        prev: null,
        next: null
    };
}

let head = null;
let tail = null;

// Push Front
function pushFront(data) {
    let newNode = createNode(data);

    // agar list empty hay
    if (head === null) {
        head = newNode;
        tail = newNode;
        return;
    }

    newNode.next = head;
    head.prev = newNode;
    head = newNode;
}
function insertatend(data) {
    let newNode=createNode(data)
   if (head==null) {
    head=newNode
    tail=newNode
    return
    
   }
   tail.next=newNode
   newNode.prev=tail
   tail=newNode

        
    }
    

// Print list
function printList() {
    let temp = head;

    while (temp !== null) {
        process.stdout.write(temp + " <-> ");
        temp = temp.next;
    }


    console.log("null");
}

// Example
pushFront(30);
pushFront(20);
pushFront(10);
insertatend(5)
insertatend(11)

printList(); 