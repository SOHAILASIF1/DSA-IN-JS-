// function node(data) {
//     this.data=data
//     this.next=null
    
// }
// let head=new node(5)
// let mid=new node(10)
// head.next=mid
// console.log(head);
// let tail=new node(15)
// mid.next=tail
// console.log(head);



//insert at begaining
// function node(data) {
//     this.data=data
//     this.next=null
    
// }

// let head=new node(15)
// let mid=new node(16)
// head.next=mid
// let newOne=new node(14)
// newOne.next=head
// head=newOne
// console.log(newOne
// );

//insert at end

function node(data) {
    this.data = data
    this.next = null
}

function insertatend(temp, head) {
    let current = head
    while (current.next != null) {
        current = current.next
    }
    current.next = temp
}

function traves(head) {
    let current = head
    while (current != null) {
        console.log(current.data)
        current = current.next
    }
}
function deletefirstNode(head){
    return head.next

}
function deleteatend(head) {
    let current=head
    while (current.next.next!=null) {
        current=current.next
        
    }
    current.next=null
    return head
    
}
let head = new node(10)
let mid = new node(20)
head.next = mid

let tailnode = new node(30)
//delete at first node 
// head=deletefirstNode(head)




insertatend(tailnode, head)

//delete at end
 head=deleteatend(head)

traves(head)
//now ok  hay  sab sahi 







