const Falsy_Truthy = {
  isNull() {
    return null;
  },
  isUndefined: undefined,
  truthy(value) {
    return value;
  }
};

module.exports = {
  isNull: Falsy_Truthy.isNull,
  isUndefined: Falsy_Truthy.isUndefined,
  truthy: Falsy_Truthy.truthy
};
