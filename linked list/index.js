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

function node (data) {
    this.data=data
    this.next=null
    
}
function insertatend(tamp,head) {
    current=head
    while (current.next!=null) {
        console.log(current.next);
        current=current.next
        
        
    }
    current=current.next
    
}
let head=new node(10)
let mid=new node(20)
head.next=mid
let tailnode=new node(30)
insertatend(tailnode,head)





