const functions = require("./functions");

test("adds 463 + 148 to equal to 611", () => {
  expect(functions.add(463, 148)).toBe(611);
});
