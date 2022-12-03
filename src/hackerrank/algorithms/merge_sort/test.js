import mergeSort from './index'

describe('Merge Sort', () => {
  const array = [5, 2, 1, 3, 6, 4];
  const expected = [1, 2, 3, 4, 5, 6];

  test('sort the empty array', () => {
    const result = mergeSort([]);
    expect(result).toEqual([]);
  });

  test('sort the array', () => {
    const result = mergeSort(array);
    expect(result).toEqual(expected);
  });
});
