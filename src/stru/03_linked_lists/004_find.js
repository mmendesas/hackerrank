class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// regular version
const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
}

// recursive version
const linkedListFind2 = (head, target) => {
  if (head == null) return false;
  if (head.val === target) return true;
  return linkedListFind2(head.next, target);
}

console.log(linkedListFind(a, 'j'))
