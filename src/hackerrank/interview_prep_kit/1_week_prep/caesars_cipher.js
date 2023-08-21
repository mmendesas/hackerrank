function caesarCipher(s, k) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (let c of s) {
    if (/[a-zA-Z]/.test(c)) {
      const isUpper = /[A-Z]/.test(c)
      const idx = alpha.indexOf(c.toLowerCase())

      let pos = idx + k
      while (pos > alpha.length - 1) {
        pos = Math.abs(alpha.length - pos)
      }
      const letter = isUpper ? alpha[pos].toUpperCase() : alpha[pos]

      result += letter
      continue;
    }

    result += c;
  }

  return result;
}

console.log(caesarCipher("There's-a-starman-waiting-in-the-sky", 3))
// Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb

console.log(caesarCipher("Hello_World!", 4)) //Lipps_Asvph!

