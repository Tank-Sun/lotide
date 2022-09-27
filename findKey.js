// findKey function
const findKey = (object, callback) => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (callback(object[key])) {
        return key;
      }
    }
  }
  return undefined;
};

module.exports = findKey;