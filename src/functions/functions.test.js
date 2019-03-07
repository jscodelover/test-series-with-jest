const functions = require("./functions");

const start = () => console.log("Test start...");
const end = () => console.log("Test End !!");

// Jest will wait for these promise to resolve before and after running each test.
beforeEach(() => start());
afterEach(() => end());

describe("basic arithmetic function", () => {
  test("adds 463 + 148 to equal to 611", () => {
    expect(functions.add(463, 148)).toBe(611);
  });
  test("subtract 463 - 148 to equal to 215", () => {
    expect(functions.subtract(463, 148)).toBe(315);
  });
  test("multiple 12 * 12 to equal 144 ", () => {
    expect(functions.multiple(12, 12)).toBe(144);
  });
  test("divide 222 / 2 to equal 111", () => {
    expect(functions.divide(222, 2)).toBe(111);
  });
});
