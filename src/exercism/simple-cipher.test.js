import { Cipher } from "./simple-cipher";

describe('Random key', () => {
  const cipher = new Cipher();

  it('can encode', ()=>{
    expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10));
  })

  it('can decode', ()=>{
    expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
  })

  it('is reversible', ()=>{
    const plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  })

  it('key is made only of lowercase letters', ()=>{
    expect(cipher.key).toMatch(/^[a-z]+$/);
  })
});

describe('Substitution cipher', () => {
  const key = 'abcdefghij';
  const cipher = new Cipher(key);

  it('keeps the submitted key', ()=>{
    expect(cipher.key).toEqual(key);
  })

  it('can encode', ()=>{
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
  })

  it('can decode', ()=>{
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
  })

  it('is reversible', ()=>{
    const plaintext = 'abcdefghij';
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  })

  it('can double shift', ()=>{
    expect(new Cipher('iamapandabear').encode('iamapandabear')).toEqual('qayaeaagaciai');
  })

  it('can wrap', ()=>{
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
  })

  it('can wrap on decode', () => {
    expect(cipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz');
  });

  it('can encode messages longer than the key', () => {
    expect(new Cipher('abc').encode('iamapandabear')).toEqual('iboaqcnecbfcr');
  });

  it('can decode messages longer than the key', () => {
    expect(new Cipher('abc').decode('iboaqcnecbfcr')).toEqual('iamapandabear');
  });
});
