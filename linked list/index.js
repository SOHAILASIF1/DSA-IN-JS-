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
function middleoflinkedlist(head) {
    let ptr=head
    let lenght=0
    let copy=lenght
    while (ptr!=null) {
        ptr=ptr.next
        lenght++
        
    }
    ptr=head
   let middle=Math.floor(lenght/2)
   for (let i = 0; i < middle; i++) {
    ptr=ptr.next
    
   }
   return ptr.data
    
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
insertatend(new node(6),head)

//search in linked list
// let ans=searchin(head,3)
// console.log(ans);


//delete at end
//  head=deleteatend(head)

// traves(head)
//now ok  hay  sab sahi  chal  raha  hay



//middleof the linked list 
// //bruteforce approch
// let ans=middleoflinkedlist(head)
// console.log(ans);

//miidle of linked optimized approch
// let ans=middleoflinkedlistOptimized(head)
// function middleoflinkedlistOptimized(head) {
//     let f=head
//     let s=head
//     while(f != null && f.next != null){
//          f=f.next.next
//          s=s.next


//     }
//     return s.data
       
    
// }
// console.log(ans);

//reverse a string

let ans=reverse(head)
console.log(ans);

function reverse(head) {
    let curr=head
    let next=null
    let prev=null
    while (curr!=null) {
        next=curr.next
        curr.next=prev
        prev=curr
        curr=next
        
        
        
    }
    return prev.data
}














