const Fetch = require("./DataFetching");

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
