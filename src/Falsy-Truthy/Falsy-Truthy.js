const Falsy_Truthy = {
  isNull() {
    return null;
  },
  isUndefined: undefined
};

module.exports = {
  isNull: Falsy_Truthy.isNull,
  isUndefined: Falsy_Truthy.isUndefined
};
