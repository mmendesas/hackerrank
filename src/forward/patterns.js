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

const pattern11 = (n = 4) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      const num = (i + j) % 2 === 0 ? 1 : 0;
      process.stdout.write(` ${num}`);
    }
    process.stdout.write("\n");
  }
};

const pattern12 = (n = 4) => {
  const max = 2 * n;

  for (let i = 1; i <= n; i++) {
    const spaces = max - i * 2;

    let line = "";
    for (let j = 1; j <= max; j++) {
      if (j <= i) line += ` ${j}`;
    }

    const reverse = [...line].reverse().join("");
    const lineFinal = `${line}${"  ".repeat(spaces + 1)}${reverse}`;

    process.stdout.write(lineFinal);
    process.stdout.write("\n");
  }
};

const pattern13 = (n = 6) => {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      const toPrint = String(count).padEnd(2, " "); // alignment
      process.stdout.write(` ${toPrint}`);
      count++;
    }
    process.stdout.write("\n");
  }
};

const pattern14 = (n = 4) => {
  // Using for loop for (A-Z):
  let alphabet = "";
  for (i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(" " + alphabet[j % alphabet.length]);
    }
    process.stdout.write("\n");
  }
};

const pattern15 = (n = 3) => {
  // Using for loop for (A-Z):
  let alphabet = "";
  for (i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(" " + alphabet[j % alphabet.length]);
    }
    process.stdout.write("\n");
  }
};

const pattern16 = (n = 5) => {
  // Using for loop for (A-Z):
  let alphabet = "";
  for (i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(" " + alphabet[i]);
    }
    process.stdout.write("\n");
  }
};

// ---A---
// --ABA--
// -ABCBA-
// ABCDCBA
const pattern17 = (n = 5) => {
  // Using for loop for (A-Z):
  let alphabet = "";
  for (i = 65; i <= 90; i++) {
    alphabet += String.fromCharCode(i);
  }

  for (let i = 0; i < n; i++) {
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    // chars
    let alphaIndex = 0;
    const max = 2 * i + 1;
    const breakpoint = Math.abs(max / 2);

    for (let j = 1; j <= max; j++) {
      process.stdout.write(alphabet[alphaIndex]);
      if (j <= breakpoint) alphaIndex += 1;
      else alphaIndex -= 1;
    }

    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

// E
// D E
// C D E
// B C D E
// A B C D E
const pattern18 = (n = 5) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphaIndex = n - 1;

  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      process.stdout.write(" " + alphabet[alphaIndex - j]);
    }
    process.stdout.write("\n");
  }
};

// RESULTS

const printAll = () => {
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
    pattern11: pattern11,
    pattern12: pattern12,
    pattern13: pattern13,
    pattern14: pattern14,
    pattern15: pattern15,
    pattern16: pattern16,
    pattern17: pattern17,
    pattern18: pattern18,
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
};

// unique test
pattern18();

// printAll()
