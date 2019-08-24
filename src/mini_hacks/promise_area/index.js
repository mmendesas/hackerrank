// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
  const PI = 3.14;
  const allowedShapes = {
    square: a => a * a,
    rectangle: ([l, w] = arr) => l * w,
    circle: n => parseFloat((PI * Math.pow(n, 2)).toFixed(2)),
    triangle: ([b, h] = arr) => 0.5 * b * h
  };
  return new Promise((res, rej) => {
    if (!Object.keys(allowedShapes).includes(shape)) {
      rej(-1);
    }
    const result = allowedShapes[shape](values);
    res(result);
  });
};

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
  return new Promise(async (res, rej) => {
    let results = [];
    for (let i = 0; i < shapes.length; i += 1) {
      const area = await calculateArea(shapes[i], values_arr[i])
        .then(data => results.push(data))
        .catch(err => err);
      if (area === -1) res([area]);
    }
    res(results);
  });
};

export default getAreas;
