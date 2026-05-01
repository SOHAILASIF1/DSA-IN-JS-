class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List banate hain
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);

// Linking
head.next = second;
second.next = third;
third.next = fourth;

// 🔁 Loop create (important part)
fourth.next = second; // yahan loop ban gaya (4 -> 2)

// ❗ Infinite traversal ho jayega agar loop handle na kiya