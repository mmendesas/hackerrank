import repeatedString from './index'

describe('Repeated String', () => {
  test('repeated string - test 0', () => {
    expect(repeatedString('aba', 10)).toBe(7);
  });

  test('repeated string - test 1', () => {
    const array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
  });
})

