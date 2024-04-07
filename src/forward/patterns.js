// draw patterns

// * * * *
// * * * *
// * * * *
// * * * *
const pattern01 = (n = 4) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(" *"); // write without new line
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
      process.stdout.write(" *");
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

// * * * * *
//   * * *
//     *
const pattern08 = (n = 3) => {
  const max = 2 * n - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < max; j++) {
      if (j <= i - 1 || j >= max - i) {
        process.stdout.write("  ");
      } else {
        process.stdout.write(" *");
      }
    }
    process.stdout.write("\n");
  }
};

//     *
//   * * *
// * * * * *
// * * * * *
//   * * *
//     *
const pattern09 = (n = 3) => {
  pattern07(n);
  pattern08(n);
};

//  *
//  * *
//  * * *
//  * * * *
//  * * *
//  * *
//  *
const pattern10 = (n = 4) => {
  const max = 2 * n - 1;

  for (let i = 1; i <= max; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;

    for (let j = 1; j <= stars; j++) {
      process.stdout.write(" *");
    }
    console.log("");
  }
};

const fnByName = {
  pattern01: pattern01,
  pattern02: pattern02,
  pattern03: pattern03,
  pattern04: pattern04,
  pattern05: pattern05,
  pattern06: pattern06,
  pattern07: pattern07,
  pattern08: pattern08,
  pattern09: pattern09,
  pattern10: pattern10,
};

Array.from({
  length: Object.keys(fnByName).length,
}).forEach((_, index) => {
  const num = `${index + 1}`.padStart(2, "0");
  const fnName = `pattern${num}`;

  console.log("_".repeat(50), `\n\n${fnName}\n`);
  if (typeof fnByName[fnName]) {
    fnByName[fnName](5);
  }
});
