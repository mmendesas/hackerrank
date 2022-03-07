import jumpingOnClouds from './index'

describe('Jumping on the clouds', () => {
  test('jumping on the clouds - test 0', () => {
    const array = [0, 0, 1, 0, 0, 1, 0]
    expect(jumpingOnClouds(array)).toBe(4);
  });

  test('jumping on the clouds - test 1', () => {
    const array = [0, 0, 0, 1, 0, 0]
    expect(jumpingOnClouds(array)).toBe(3);
  });
})

