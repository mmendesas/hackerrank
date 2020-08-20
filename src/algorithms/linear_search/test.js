import linearSearch from './index'

describe('Linear Search', () => {

  const array = [11, 23, 8, 14, 30, 9, 6, 17, 22, 28, 25, 15, 7, 10, 19];

  test('target is in the array', () => {
    const result = linearSearch(array, 9);
    expect(result).toBe(true);
  });

  test('target is not in the array', () => {
    const result = linearSearch(array, 16);
    expect(result).toBe(false);
  });

  test('target is in middle point', () => {
    const result = linearSearch(array, 22);
    expect(result).toBe(true);
  });

});
