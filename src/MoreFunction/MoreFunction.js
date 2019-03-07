const MoreFunction = {
  doubleArray(array) {
    return array.map(ele => ele * 2);
  },
  getFullName() {
    return {
      first: "Manisha",
      last: "Basra"
    };
  },
  userArray(array) {
    return [...array, "john", "sam"];
  },
  handler: "jscodelove"
};

module.exports = MoreFunction;
