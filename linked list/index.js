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
function searchin(head,data) {
    let ptr=head
    let count=0
    while(ptr!=null){
        ptr=ptr.next
        count++
        if (ptr.data===data) {
            return count
            
        }
       

    }
    return current.data
}
let head = new node(1)
let mid = new node(2)
let secondlast=new node(3)
head.next = mid
mid.next=secondlast

let sectailnode = new node(4)
let tailnode=new node(5)

//delete at first node 
// head=deletefirstNode(head)




insertatend(sectailnode, head)
insertatend(tailnode,head)

//search in linked list
// let ans=searchin(head,3)
// console.log(ans);


//delete at end
//  head=deleteatend(head)

traves(head)
//now ok  hay  sab sahi  chal  raha  hay




//middleof the linked list bruteforce approch







