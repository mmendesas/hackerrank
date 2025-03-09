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

// iterative
// const deepFirstValues = (root) => {
//   if (!root) return [];

//   const stack = [root];
//   const values = [];

//   while (stack.length) {
//     const current = stack.pop();
//     values.push(current.val);
//     console.log(">>>> grooosa", current.val);

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }

//   return values;
// };

// recursive
const deepFirstValues = (root) => {
  if (!root) return [];
  const left = deepFirstValues(root.left);
  const right = deepFirstValues(root.right);
  return [root.val, ...left, ...right];
};

console.log(deepFirstValues(a));
