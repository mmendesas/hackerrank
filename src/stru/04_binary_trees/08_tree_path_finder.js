class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;

b.left = d;
b.right = e;
c.right = f;

//     a
//    / \
//   b   c
//  / \   \
// d   e   f

// depth first - recursive
// const pathFinder = (root, target) => {
//   if (!root) return null;
//   if (root.val === target) return [root.val];

//   const left = pathFinder(root.left, target);
//   if (left) return [root.val, ...left];

//   const right = pathFinder(root.right, target);
//   if (right) return [root.val, ...right];

//   return null;
// };

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result) return result.reverse();
  return null;
};

// depth first - recursive with push
const pathFinderHelper = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  const left = pathFinderHelper(root.left, target);
  if (left) {
    left.push(root.val);
    return left;
  }

  const right = pathFinderHelper(root.right, target);
  if (right) {
    right.push(root.val);
    return right;
  }

  return null;
};

const res = pathFinder(a, "e"); // -> [ 'a', 'b', 'e' ]
console.log(res);
