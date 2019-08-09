import countPairs from './index'

describe('Sock Merchant', () => {
  test('sock merchant - test 0', () => {
    const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    expect(countPairs(array)).toBe(3);
  });

  test('sock merchant - test 0', () => {
    const array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    expect(countPairs(array)).toBe(4);
  });
});

