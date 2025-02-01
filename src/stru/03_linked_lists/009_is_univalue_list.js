class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// iterative solution
const isUniValueList1 = (head) => {
  let current = head;
  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }
  return true;
};

// recursive solution
const isUniValueList = (head, prev = null) => {
  if (head === null) return true;
  if (prev && head.val !== prev) return false;
  return isUniValueList(head.next, head.val);
};

console.log("isunivalue", isUniValueList(a));
