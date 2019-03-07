const axios = require("axios");

const Fetch = {
  getUserName() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.data)
      .catch(err => err);
  }
};

module.exports = Fetch;
