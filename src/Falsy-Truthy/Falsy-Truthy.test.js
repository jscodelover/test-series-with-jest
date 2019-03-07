/**
 * CHECK FOR TRUTHY & FALSY VALUES
 * toBeNull matches only null
 * toBeUndefined matches only undefined
 * toBeDefined is the opposite of toBeUndefined
 * toBeTruthy matches anything that an if statement treats as true
 * toBeFalsy matches anything that an if statement treats as false
 */

const Falsy_Truthy = require("./Falsy-Truthy");

describe("CHECK FOR TRUTHY & FALSY VALUES", () => {
  test("Value is null", () => {
    expect(Falsy_Truthy.isNull()).toBeNull();
  });
  test("Value is undefined", () => {
    expect(Falsy_Truthy.isUndefined).toBeUndefined();
  });
  test.each`
    value
    ${1}
    ${true}
    ${"any"}
  `("All are Truthy value", ({ value }) => {
    expect(Falsy_Truthy.truthy(value)).toBeTruthy();
  });
  test.each`
    value
    ${0}
    ${null}
    ${undefined}
    ${false}
  `("All are Falsy value", ({ value }) => {
    expect(Falsy_Truthy.falsy(value)).toBeFalsy();
  });
});
