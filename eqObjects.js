const eqArrays = require('./eqArrays');

// actual functions
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // check if they have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // check if the value for each key in one object is the same as
  // the value for that same key in the other object
  for (let key in object1) {
    if (object1.hasOwnProperty(key)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;