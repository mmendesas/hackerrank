class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     12
//    /  \
//   6    6
//  / \    \
// 4   6    12

// depth first - recursive
// const treeValueCount = (root, target) => {
//   if (!root) return 0;
//   const match = root.val === target ? 1 : 0;

//   const timesLeft = treeValueCount(root.left, target);
//   const timesRight = treeValueCount(root.right, target);

//   return match + timesLeft + timesRight;
// };

// depth first - iterative
// const treeValueCount = (root, target) => {
//   if (!root) return 0;
//   const stack = [root];
//   let count = 0;

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val === target) {
//       count += 1;
//     }

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }

//   return count;
// };

// breadth first - iterative
const treeValueCount = (root, target) => {
  const queue = [root];
  let count = 0;

  while (queue.length) {
    const node = queue.shift(); // FIFO
    if (!node) continue;

    if (node.val === target) {
      count += 1;
    }

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return count;
};

const res = treeValueCount(a, 6); // -> 3
console.log(res);
