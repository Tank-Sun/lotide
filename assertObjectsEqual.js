const eqObjects = require('./eqObjects');

// actual function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import util library's inspect function
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;