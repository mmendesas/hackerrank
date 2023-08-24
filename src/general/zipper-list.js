class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}


// test
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x')
const y = new Node('y')
const z = new Node('z')
x.next = y;
y.next = z
// x -> y -> z

function zipperList(head1, head2) {
  let idx = 1
  let node = new Node()
  let current = node;

  while (true) {
    if (head1 === null) {
      current.next = head2;
      break;
    }
    if (head2 === null) {
      current.next = head1;
      break;
    }

    if (idx % 2 == 0) {
      current.next = head2;
      head2 = head2.next;
    } else {
      current.next = head1;
      head1 = head1.next;
    }

    current = current.next;
    idx++
  }

  return node.next;
}

// testing
print(a) // a -> b -> c
print(x) // x -> y -> z
print(zipperList(a, x)) // a -> x -> b -> y -> c -> z

// helper
function print(node) {
  const list = []
  let current = node;

  while (current) {
    list.push(current.data)
    current = current.next;
  }

  console.log(list.join(' -> '))
}
