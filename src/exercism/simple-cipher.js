
class Cipher {
  constructor(key = '') {
    this.keyMap = key
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
  }

  encode(text) {
    let result = ''

    for (let i = 0; i < text.length; i++) {
      const charA = text[i]
      const idxA = this.alphabet.indexOf(charA)

      const charB = this.keyMap[i]
      const idxB = this.alphabet.indexOf(charB)

      const moveIdx = idxB - idxA;
      console.log('asdf', charA, charB, idxB, moveIdx)
      result += this.alphabet[moveIdx]
    }

    return result;
  }

  decode() { }

  get key() {
    return this.keyMap
  }
}

const key = 'iamapandabear';
const cipher = new Cipher(key)

const result = cipher.encode('iamapandabear')

console.log(cipher.key)
console.log("result:", result)
