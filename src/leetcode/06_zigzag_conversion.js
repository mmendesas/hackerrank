// Zigzag conversion (medium)
// Write a string in a zigzag pattern on a given number of rows

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"

// Input: s = "A", numRows = 1
// Output: "A"

const convert = (text, numRows) => {

  const slots = Array(numRows).fill('')

  let step = 0;
  let change = false;

  for(let c of text){
    slots[step] += c;
    if(slots.length > 1){
      const signal = change ? -1 : 1;
      step = step + signal;

      if(step == 0) change = false;         // start
      if(step == numRows -1) change = true; // end
    }
  }
  return slots.join('')
}

console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR") // PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI") // PINALSIGYAHRPI
console.log(convert("A", 1) === "A") // A
