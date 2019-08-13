import rotLeft from './index';

describe('Left rotation', () => {
  test('rotation left - test 0', () => {
    const array = [1, 2, 3, 4, 5];
    expect(rotLeft(array, 4)).toEqual([5, 1, 2, 3, 4]);
  });

  test('rotation left - test 1', () => {
    const array = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
    expect(rotLeft(array, 10)).toEqual([77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]);
  });
});

