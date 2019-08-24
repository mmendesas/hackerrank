import getAreas from "./index";

describe("Calculate areas of shapes", () => {
  test("get areas - test 0", () => {
    const shapes = ["square", "rectangle", "circle", "triangle"];
    const values = [2, [3, 4], 5, [2, 4]];

    getAreas(shapes, values).then(data => {
      expect(data).toEqual([4, 12, 78.5, 4]);
    });
  });

  test("get areas - test 1", () => {
    const shapes = ["square", "trapezium", "rectangle"];
    const values = [2, [3, 3, 4], [1, 3]];

    getAreas(shapes, values).then(data => {
      console.log(`results: ${Array.isArray(data)}`);
      expect(data).toEqual([-1]);
    });
  });
});
