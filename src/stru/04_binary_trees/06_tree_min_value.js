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
//    /   \
//   11    4
//  / \     \
// 4   -2    1

// // breadth first - iterative
// const treeMinValue = (root) => {
//   const queue = [root];
//   let min = Infinity;

//   while (queue.length > 0) {
//     const node = queue.shift();

//     if (node.val < min) {
//       min = node.val;
//     }

//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }

//   return min;
// };

// depth first - recursive
const treeMinValue = (root) => {
  if (!root) return Infinity;

  const minLeft = treeMinValue(root.left);
  const minRight = treeMinValue(root.right);

  return Math.min(root.val, minLeft, minRight);
};

const res = treeMinValue(a);
console.log(res);
