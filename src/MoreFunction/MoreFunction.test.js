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
  test("get full name ", () => {
    expect(MoreFunction.getFullName("Manisha", "Basra")).toEqual({
      first: "Manisha",
      last: "Basra"
    });
  });
  test("array[...passsedArray, john, sam] contain user sam", () => {
    expect(
      MoreFunction.userArray(["sam2", "max", "andrew", "hurbert"])
    ).toContain("sam");
  });
});
