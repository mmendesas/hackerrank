import repeatedString from './index'

describe('Repeated String', () => {
  test('should test a simple string', () => {
    expect(repeatedString('aba', 10)).toBe(7);
  });

  test('should test a letter with big number', () => {
    const array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
  });
})

