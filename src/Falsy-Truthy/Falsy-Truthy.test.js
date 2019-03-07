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
});
