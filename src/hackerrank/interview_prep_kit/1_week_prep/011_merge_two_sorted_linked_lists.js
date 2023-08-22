
class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

function buildList(arr) {
  const [first, ...rest] = arr

  const head = new Node(first)
  let current = head

  for (let item of rest) {
    current.next = new Node(item)
    current = current.next
  }
  return head;
}

function listValues2(head, arr = []) {
  if (!head) return arr;
  arr.push(head.data)
  return listValues2(head.next, arr)
}


function listValues(head) {
  let current = head;
  const arr = []
  while (current !== null) {
    arr.push(current.data)
    current = current.next
  }
  return arr
}

const linked01 = buildList([1, 3, 5, 7])
const linked02 = buildList([1, 2, 4, 6, 8])

function mergeTwoLists(head1, head2) {
  let node = new Node()
  let current = node;

  while (true) {
    // no more items get rest of head2
    if (head1 === null) {
      current.next = head2;
      break;
    }

    if (head2 === null) {
      current.next = head1;
      break;
    }

    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next; // move forward
    } else {
      current.next = head2
      head2 = head2.next; // move forward
    }

    current = current.next; // move forward
  }

  return node.next;
}

function mergeTwoLists2(head1, head2) {
  if (head1 == null) return head2;
  if (head2 == null) return head1;

  if (head1.data < head2.data) {
    head1.next = mergeTwoLists(head1.next, head2)
    return head1
  } else {
    head2.next = mergeTwoLists(head1, head2.next)
    return head2
  }
}

const merged = mergeTwoLists2(linked01, linked02)
console.log(listValues(merged)) // [1,1,2,3,4,5,6,7,8]
