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

// regular
const getNodeValue2 = (head, index) => {

  let current = head;
  let currentIdx = 0;

  while (current !== null) {
    if (index === currentIdx) {
      return current.val;
    }
    current = current.next;
    currentIdx += 1;
  }

  return null;
}


// recursive
const getNodeValue = (head, targetIndex, idx = 0) => {
  if (head === null) return null;

  if (targetIndex === idx) {
    return head.val
  }

  return getNodeValue(head.next, targetIndex, idx + 1)
}

// recursive 2
const getNodeValue3 = (head, index) => {
  if (head == null) return null
  if (index === 0) return head.val;
  return getNodeValue3(head.next, index - 1);
}


console.log(getNodeValue2(a, 2)); // 'c'
console.log(getNodeValue3(a, 2)); // 'c'
