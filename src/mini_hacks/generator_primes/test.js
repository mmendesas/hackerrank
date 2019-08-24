import getPrimes from "./index";

describe("Generator Primes", () => {
  test("generator primes - test 0", () => {
    // get generator
    const gen = getPrimes(10);

    // validate all items
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(3);
    expect(gen.next().value).toBe(5);
    expect(gen.next().value).toBe(7);

    // check if is the last one
    expect(gen.next().done).toBe(true);
  });

  test("generator primes - test 1", () => {
    // get generator
    const gen = getPrimes(30);

    // validate all items
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(3);
    expect(gen.next().value).toBe(5);
    expect(gen.next().value).toBe(7);
    expect(gen.next().value).toBe(11);
    expect(gen.next().value).toBe(13);
    expect(gen.next().value).toBe(17);
    expect(gen.next().value).toBe(19);
    expect(gen.next().value).toBe(23);
    expect(gen.next().value).toBe(29);

    // check if is the last one
    expect(gen.next().done).toBe(true);
  });
});
