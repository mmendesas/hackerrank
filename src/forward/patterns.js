// draw patterns

// * * * *
// * * * *
// * * * *
// * * * *
const pattern01 = (n = 4) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* "); // write without new line
    }
    process.stdout.write("\n");
  }
};

// *
// * *
// * * *
// * * * *
const pattern02 = (n = 4) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
};

// 1
// 1 2
// 1 2 3
// 1 2 3 4
const pattern03 = (n = 4) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(" " + String(j + 1));
    }
    process.stdout.write("\n");
  }
};

// 1
// 2 2
// 3 3 3
// 4 4 4 4
const pattern04 = (n = 4) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(" " + String(i + 1));
    }
    process.stdout.write("\n");
  }
};

// * * * *
// * * *
// * *
// *
const pattern05 = (n = 4) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(" *");
    }
    process.stdout.write("\n");
  }
};

// 1 2 3 4
// 1 2 3
// 1 2
// 1
const pattern06 = (n = 4) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(" " + String(j + 1));
    }
    process.stdout.write("\n");
  }
};

//       *
//     * * *
//   * * * * *
// * * * * * * *
const pattern07 = (n = 4) => {
  const max = 2 * n - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < max; j++) {
      if (j >= n - i - 1 && j <= n - 1 + i) {
        process.stdout.write(" *");
      } else {
        process.stdout.write("  ");
      }
    }
    process.stdout.write("\n");
  }
};

const pattern08 = (n = 3) => {};

// results
// pattern01();
// pattern02();
// pattern03();
// pattern04();
// pattern05();
// pattern06();
pattern07();
