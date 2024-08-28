class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1)

a.next = b;
b.next = c;
c.next = d;

// regular
const sumList = (head) => {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}

// recursive
const sumList2 = (head) => {
  if (head === null) return 0;
  return head.val + sumList2(head.next)
}

console.log(sumList(a)) // 12
console.log(sumList2(b)) // 12

