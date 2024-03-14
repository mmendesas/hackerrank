// COPIED

/**
 * For this exercise we're going to brute force check the grid for squares.
 * There is a lot of room to make this more efficient, but with the sizes of the grids
 * we're checking it isn't necessary to optimize.
 *
 * Plan of action: for every co-ordinate (x,y) in the grid, check to see how many rectangles it is
 * the top left corner of.
 */

function isRect({ x, y, x2, y2, grid }) {
  /**
   * Simply test if the co-ordinates x,y (top left) and x2,y2 (bottom right) form a continuous square.
   * Vertical walls are either | or +, horizontal walls are - or +
   */

  function isHorizontalLine(y, x) {
    return grid[y][x] === "-" || grid[y][x] === "+";
  }

  function isVerticalLine(y, x) {
    return grid[y][x] === "|" || grid[y][x] === "+";
  }

  function hasValidCorners({ top, left, bottom, right }) {
    const res =
      grid[top][left] +
      grid[top][right] +
      grid[bottom][left] +
      grid[bottom][right];

    return res === "++++";
  }

  if (!hasValidCorners({ top: y, left: x, bottom: y2, right: x2 }))
    return false;

  // Check if the top and bottom lines are continuous
  for (let bufX = x; bufX <= x2; bufX++)
    if (!isHorizontalLine(y, bufX) || !isHorizontalLine(y2, bufX)) return false;

  // Check if the left and right lines are continuous
  for (let bufY = y; bufY <= y2; bufY++)
    if (!isVerticalLine(bufY, x) || !isVerticalLine(bufY, x2)) return false;

  return true;
}

function count(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const colCount = grid[0].length;
  const rowCount = grid.length;

  let rectCount = 0;

  for (let top = 0; top < rowCount; top++) {
    for (let left = 0; left < colCount; left++) {
      // x and y are the top left corner of the rectangle

      for (let bottom = top + 1; bottom < rowCount; bottom++) {
        for (let right = left + 1; right < colCount; right++) {
          if (isRect({ x: left, y: top, x2: right, y2: bottom, grid })) {
            rectCount++;
          }
        }
      }
    }
  }

  return rectCount;
}

export { count };
