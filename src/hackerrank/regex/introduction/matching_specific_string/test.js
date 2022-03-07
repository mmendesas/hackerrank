import countMatch from './index';

describe('[Regex] - count hackerrank word', () => {
  test('should be 1', () => {
    expect(countMatch('Simple hackerrank test').length).toBe(1);
  });

  test('should be 0', () => {
    expect(countMatch('Simple test').length).toBe(0);
  });

  test('should be 2', () => {
    expect(countMatch('Simple hackerrank test, with hackerrank').length).toBe(2);
  });
})

