class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//
const zipperLists = (head1, head2) => {
  let idx = 0;
  const node = new Node()
  let current = node;

  while (true) {
    if (head1 === null) {
      current.next = head2;
      break;
    }
    if (head2 === null) {
      current.next = head1;
      break
    }

    if (idx % 2 === 0) {
      current.next = head1;
      head1 = head1.next;
    }
    else {
      current.next = head2;
      head2 = head2.next;
    }

    idx++;
    current = current.next;
  }

  return node.next
}

// testing vars
const s = new Node("s");
const t = new Node("t");
s.next = t;

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;

const printList = (head = null) => {
  if (head === null) return '';
  return head.val + ' -> ' + printList(head.next)
}

console.log(printList(zipperLists(s, one)));
// s -> 1 -> t -> 2 -> 3 -> 4
