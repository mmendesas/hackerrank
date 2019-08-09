import countValleys from './index';

describe('Count Valleys', () => {
  test('count valleys - test 0', () => {
    expect(countValleys(8, 'UDDDUDUU')).toBe(1);
  });

  test('count valleys - test 1', () => {
    const array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    expect(countValleys(12, 'DDUUDDUDUUUD')).toBe(2);
  });
})

