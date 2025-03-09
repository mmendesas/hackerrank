class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      3
//     / \
//   11    4
//   / \    \
//  4   -2    1

// deep first - recursive
// const treeSum = (root) => {
//   if (!root) return 0;

//   const left = treeSum(root.left);
//   const right = treeSum(root.right);

//   return root.val + left + right;
// };

// deep first - iterative
// const treeSum = (root) => {
//   if (!root) return 0;

//   const stack = [root];
//   let sum = 0;

//   while (stack.length > 0) {
//     const current = stack.pop();
//     sum += current.val;

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return sum;
// };

// breadth first - iterative
const treeSum = (root) => {
  if (!root) return 0;

  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
};

const res = treeSum(a);
console.log(res);
