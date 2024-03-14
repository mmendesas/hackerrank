
// # Simple Cipher
// encoding and decoding a message using a simple shift cipher, also known as a Caesar cipher.
// for each letter, get the distance between the letter and the key, then use the distance to get the new letter

export class Cipher {
  constructor(key = '') {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
    this.cipherKey = key.toLowerCase() || this.random();
  }

  random() {
    return Array.from({ length: 100 }, () => {
      const random = Math.floor(Math.random() * this.alphabet.length)
      return this.alphabet[random]
    }).join('')
  }

  // getDistance('a', 'b') => 1
  getDistance(a, b) {
    if (a === undefined || b === undefined) return 3

    const posA = this.alphabet.indexOf(a);
    const posB = this.alphabet.indexOf(b);
    return posB - posA;
  }

  // encode('aaaaaaaaaa') => 'abcdefghij'
  encode(text = '') {
    let result = ''

    for (const [idx, letter] of text.split('').entries()) {
      const indexA = this.alphabet.indexOf(letter);
      const dist = this.getDistance('a', this.cipherKey[idx % this.key.length])
      const indexB = Math.abs((indexA + dist)) % this.alphabet.length;

      result += this.alphabet[indexB];
    }

    return result
  }

  // decode('abcdefghij') => 'aaaaaaaaaa'
  decode(text = '') {
    let result = ''

    for (let [idx, letter] of text.split('').entries()) {
      const indexA = this.alphabet.indexOf(letter);
      const dist = this.getDistance('a', this.cipherKey[idx % this.key.length])
      const indexB = Math.abs((indexA - dist+ this.alphabet.length)) % this.alphabet.length;
      result += this.alphabet[indexB];
    }

    return result
  }

  get key() {
    return this.cipherKey
  }
}
