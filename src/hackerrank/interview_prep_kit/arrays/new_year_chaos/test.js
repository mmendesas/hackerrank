import minimumBribes from "./index";

describe("Minimum Bribes", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("minimumBribes is a function", () => {
    expect(typeof minimumBribes).toEqual("function");
  });

  test("minimum bribes - test 0", () => {
    const array = [2, 1, 5, 3, 4];
    minimumBribes(array);

    expect(console.log.mock.calls[0][0]).toEqual(3);
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("minimum bribes - test 1", () => {
    const array = [2, 5, 1, 3, 4];
    minimumBribes(array);

    expect(console.log.mock.calls[0][0]).toEqual("Too chaotic");
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("minimum bribes - test 2", () => {
    const array = [5, 1, 2, 3, 7, 8, 6, 4];
    minimumBribes(array);

    expect(console.log.mock.calls[0][0]).toEqual("Too chaotic");
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("minimum bribes - test 3", () => {
    const array = [1, 2, 5, 3, 7, 8, 6, 4];
    minimumBribes(array);

    expect(console.log.mock.calls[0][0]).toEqual(7);
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("minimum bribes - test 4", () => {
    const array = [1, 2, 5, 3, 4, 7, 8, 6];
    minimumBribes(array);

    expect(console.log.mock.calls[0][0]).toEqual(4);
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("minimum bribes - test grosa", () => {
    const array = [1, 2, 4, 3];
    minimumBribes(array);

    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls.length).toEqual(1);
  });
});
