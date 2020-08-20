import insertionSort from './index'

describe('Insertion Sort', () => {
  const array = [5, 2, 1, 3, 6, 4];
  const expected = [1, 2, 3, 4, 5, 6];

  test('sort the empty array', () => {
    const result = insertionSort([]);
    expect(result).toEqual([]);
  });

  test('sort the array', () => {
    const result = insertionSort(array);
    expect(result).toEqual(expected);
  });
});
