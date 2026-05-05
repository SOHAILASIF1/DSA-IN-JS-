// Node class
function Node(data) {
    this.data = data;
    this.next = null;
}

// Linked List 1: 1 -> 3 -> 5 -> 7
let head1 = new Node(1);
head1.next = new Node(3);
head1.next.next = new Node(5);
head1.next.next.next = new Node(7);

// Linked List 2: 2 -> 4 -> 6 -> 8
let head2 = new Node(2);
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(8);

// Traverse function
function traverse(head) {
    let current = head;

    while (current != null) {
        // console.log(current.data);
        current = current.next;
    }
}

// console.log("Linked List 1:");
// traverse(head1);

// console.log("Linked List 2:");
// traverse(head2);



let ans=mergeSorted(head1,head2)
function mergeSorted(head1,head2){
    if (head1==null || head2==null) {
        return head1==null?head2:head1
        
    }
    if (head1.data<=head2.data) {
        head1.next=mergeSorted(head1.next,head2)
        return head1 
        
    }else{
        head2.next=mergeSorted(head1,head2.next)
        return head2
    }

}
traverse(ans) //jh

