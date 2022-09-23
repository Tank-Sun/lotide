// map function
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// assertArraysEqual functions for testing
const eqArrays = function(arr1, arr2) {
  // check the lengths of two arrays, if they are different, false is returned
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check if each index of elements are the same, if they are different, false is returned
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // otherwise, two arrays are the same
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


// test code
const wordLength = map(words, word => word.length);
assertArraysEqual(wordLength, [6, 7, 2, 5, 3]);

const upperCase = map(words, word => word.toUpperCase());
assertArraysEqual(upperCase, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const sentense = map(words, word => word + ' is great!');
assertArraysEqual(sentense, ["ground is great!", "control is great!", "to is great!", "major is great!", "tom is great!"]);


