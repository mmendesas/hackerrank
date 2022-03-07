import minimumSwaps2 from "./index";

describe("Minimum swaps 2", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("minimum swaps 2 is a function", () => {
    expect(typeof minimumSwaps2).toEqual("function");
  });

  test("minimum swaps 2 - test 0", () => {
    const array = [4, 3, 1, 2];
    minimumSwaps2(array);

    expect(console.log.mock.calls[0][0]).toEqual(3);
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("minimum swaps 2 - test 1", () => {
    const array = [2, 3, 4, 1, 5];
    minimumSwaps2(array);

    expect(console.log.mock.calls[0][0]).toEqual(3);
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("minimum swaps 2 - test 2", () => {
    const array = [1, 3, 5, 2, 4, 6, 7];
    minimumSwaps2(array);

    expect(console.log.mock.calls[0][0]).toEqual(3);
    expect(console.log.mock.calls.length).toEqual(1);
  });
});
