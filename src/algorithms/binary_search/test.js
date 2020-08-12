import binarySearch from './index'

describe('Binary Search', () => {

  const array = [11, 23, 8, 14, 30, 9, 6, 17, 22, 28, 25, 15, 7, 10, 19];

  test('target is in the array', () => {
    const result = binarySearch(array, 9);
    expect(result).toBe(true);
  });

  test('target is not in the array', () => {
    const result = binarySearch(array, 16);
    expect(result).toBe(false);
  });

  test('target is in middle point', () => {
    const result = binarySearch(array, 22);
    expect(result).toBe(true);
  });

});
