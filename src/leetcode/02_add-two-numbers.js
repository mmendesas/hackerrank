
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// 2 -> 4 -> 3
// 5 -> 6 -> 4
// -----------
// 7 -> 0 -> 8

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined) ? 0 : val
  this.next = (next === undefined) ? null : next
}

const addTwoNumbers = (l1, l2) => {
  let remain = 0;
  let l3 = null;
  let res = null;

  while (l1 !== null || l2 !== null) {
    let a = (l1 !== null) ? l1.val : 0;
    let b = (l2 !== null) ? l2.val : 0;

    let sum = a + b + remain;
    let c = sum % 10;
    remain = Math.floor(sum / 10);

    // node for result list
    if (l3 === null) {
      l3 = new ListNode(c, null);
      res = l3;
    } else {
      l3.next = new ListNode(c, null);
      l3 = l3.next;
    }

    // move
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  // create a new node
  if (remain != 0) {
    l3.next = new ListNode(remain, null);
  }

  return res;
}

const printNode = (node, str = '') => {
  if (node === null || node === undefined) {
    console.log(str)
    return
  }
  str += node.next ? `${node.val} -> ` : node.val
  printNode(node.next, str)
}

// 2 4 + 5 6
console.log('\n')
const l1 = new ListNode(2, new ListNode(4, undefined))
const l2 = new ListNode(5, new ListNode(6, undefined))

printNode(l1)
printNode(l2)
console.log('---------:')
printNode(addTwoNumbers(l1, l2)) // 7 -> 0 -> 1

// 2 4 3 + 5 6 4
console.log('\n')
const l3 = new ListNode(2, new ListNode(4, new ListNode(3, undefined)))
const l4 = new ListNode(5, new ListNode(6, new ListNode(4, undefined)))

printNode(l3)
printNode(l4)
console.log('---------:')
printNode(addTwoNumbers(l3, l4)) // 7 -> 0 -> 8

// 9999 + 99
console.log('\n')
const l5 = new ListNode(9, new ListNode(9, new ListNode(9, ListNode(9, undefined))))
const l6 = new ListNode(9, new ListNode(9, undefined))

printNode(l5)
printNode(l6)
console.log('---------:')
printNode(addTwoNumbers(l5, l6)) // 8 -> 9 -> 0 -> 1
