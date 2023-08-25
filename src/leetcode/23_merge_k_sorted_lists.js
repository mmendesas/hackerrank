class ListNode {
  constructor(val) {
    this.val = val || 0;
    this.next = null
  }
}

function printList(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  console.log(arr.join(' -> '))
}

function buildList(arr) {
  const node = new ListNode()
  let current = node;

  for (let num of arr) {
    current.next = new ListNode(num)
    current = current.next;
  }

  return node.next;
}

function getMinIndex(lists) {
  if (!lists.length) return -1;
  if (!lists[0].val) return -1;

  let idx = 0;
  let min = lists[idx].val || -1;

  for (let i = 1; i < lists.length; i++) {
    if (lists[i].val < min) {
      min = lists[i].val;
      idx = i;
    }
  }
  return idx;
}

function mergeSortedLists(lists) {

  const node = new ListNode()
  let current = node;

  while (lists.length) {
    let idx = getMinIndex(lists)
    if (idx == -1) break;

    // move forward
    current.next = lists[idx]
    current = current.next;

    // update list
    lists[idx] = lists[idx].next;
    lists = lists.filter(item => item !== null)
  }

  return node.next;
}

const a = buildList([1, 4, 5])
const b = buildList([1, 3, 4])
const c = buildList([2, 6])



printList(mergeSortedLists([a])) // 1 -> 4 -> 5
printList(mergeSortedLists([a, b, c])) // 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
printList(mergeSortedLists([[]]))

