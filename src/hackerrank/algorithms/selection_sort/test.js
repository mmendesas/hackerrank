import selectionSort from './index'

describe('Selection Sort', () => {
  const array = [5, 2, 1, 3, 6, 4];
  const expected = [1, 2, 3, 4, 5, 6];

  test('sort the empty array', () => {
    const result = selectionSort([]);
    expect(result).toEqual([]);
  });

  test('sort the array', () => {
    const result = selectionSort(array);
    expect(result).toEqual(expected);
  });
});
