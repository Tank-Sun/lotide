// assertEqual function for test
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


// test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  Tank: 1,
  Awsome: true
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 1), 'Tank');
assertEqual(findKeyByValue(bestTVShowsByGenre, true), 'Awsome');