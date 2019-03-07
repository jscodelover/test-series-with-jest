const MoreFunction = require("./MoreFunction");

describe("test the non-primitive data type", () => {
  test("double the array [2,4,5,13,9]", () => {
    expect(MoreFunction.doubleArray([2, 4, 5, 13, 9])).toEqual([
      4,
      8,
      10,
      26,
      18
    ]);
  });
});
