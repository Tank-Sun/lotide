// test assertArraysEqual functions
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


// actual functions
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};



// test code
const words = 'hello';
const str = 'lighthosue in the house';
assertArraysEqual(letterPositions(words)["h"], [0]);
assertArraysEqual(letterPositions(words)["e"], [1]);
assertArraysEqual(letterPositions(words)["l"], [2, 3]);
assertArraysEqual(letterPositions(words)["o"], [4]);

assertArraysEqual(letterPositions(str)["l"], [0]);
assertArraysEqual(letterPositions(str)["i"], [1, 11]);
assertArraysEqual(letterPositions(str)["h"], [3, 5, 15, 18]);
assertArraysEqual(letterPositions(str)["n"], [12]);