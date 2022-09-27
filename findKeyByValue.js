// actual functions
const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
  return undefined;
};

module.exports = findKeyByValue;