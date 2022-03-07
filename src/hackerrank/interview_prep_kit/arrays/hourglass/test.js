import hourglassSum from './index';

describe('Hour glass sum', () => {
  test('hour glass sum - test 0', () => {
    const array2d = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];
    expect(hourglassSum(array2d)).toBe(19);
  });

  test('hour glass sum - test 1', () => {
    const array2d = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 9, 2, -4, -4, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0],
    ]
    expect(hourglassSum(array2d)).toBe(13);
  });

  test('hour glass sum - test 2', () => {
    const array2d = [
      [-1, -1, 0, -9, -2, -2],
      [-2, -1, -6, -8, -2, -5],
      [-1, -1, -1, -2, -3, -4],
      [-1, -9, -2, -4, -4, -5],
      [-7, -3, -3, -2, -9, -9],
      [-1, -3, -1, -2, -4, -5]
    ]
    expect(hourglassSum(array2d)).toBe(-6);
  });
})

