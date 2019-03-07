const Fetch = require("./DataFetching");

describe(" Test cases for fetched data", () => {
  test("fetched user name is Bret", () => {
    expect.assertions(1);
    return Fetch.getUserName().then(data => {
      expect(data.username).toEqual("Bret");
    });
  });
});
