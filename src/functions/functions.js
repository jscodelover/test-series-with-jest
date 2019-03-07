const functions = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiple(num1, num2) {
    return num1 * num2;
  }
};

module.exports = {
  add: functions.add,
  subtract: functions.subtract,
  multiple: functions.multiple
};
