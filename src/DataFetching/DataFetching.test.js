const Fetch = require("./DataFetching");

const initDatabase = () => console.log("Database Initialising....");
const closeDatabase = () => console.log("Database Closing !!!");

// Jest will wait for these promise to resolve before and after running tests.
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

describe(" Test cases for fetched data", () => {
  // Using Promise
  test("fetched user name is Bret", () => {
    expect.assertions(1);
    return Fetch.getUserName().then(data => {
      expect(data.username).toEqual("Bret");
    });
  });
  // Using Async-Await
  test("fetched user name is Bret", async () => {
    expect.assertions(1);
    const data = await Fetch.getUserName();
    return expect(data.username).toEqual("Bret");
  });
});
