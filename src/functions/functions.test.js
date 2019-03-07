const functions = require("./functions");

describe("basic arithmetic function", () => {
  test("adds 463 + 148 to equal to 611", () => {
    expect(functions.add(463, 148)).toBe(611);
  });
  test("subtract 463 - 148 to equal to 215", () => {
    expect(functions.subtract(463, 148)).toBe(315);
  });
});
