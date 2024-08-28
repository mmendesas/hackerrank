class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c
const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const printList = (head) => {
  if (head === null) return '';
  return head.val + ' -> ' + printList(head.next)
}

console.log(printList(reverseList(a)))
