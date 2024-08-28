class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d')

a.next = b;
b.next = c;
c.next = d;

// regular version
const linkedListValues = (head) => {
  const result = []
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next
  }
  return result
}

// recursive version 1
const linkedListValues2 = (head) => {
  if (head === null) return [];
  return [head.val].concat(linkedListValues2(head.next))
}

// recursive with memoized list
const linkedListValues3 = (head, arr = []) => {
  if (head === null) return arr;
  arr.push(head.val)
  return linkedListValues3(head.next, arr);
}

console.log(linkedListValues(a)) // [ 'a', 'b', 'c', 'd' ]
console.log(linkedListValues2(a)) // [ 'a', 'b', 'c', 'd' ]
console.log(linkedListValues3(a)) // [ 'a', 'b', 'c', 'd' ]
