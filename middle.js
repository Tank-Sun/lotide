// assertArraysEqual test function
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

// middle function

const middle = function(array) {
  // set default middleArray as empty array
  let middleArray = [];

  // edge cases for arrays with 0, 1 or 2 elements
  if (array.length <= 2) {
    return middleArray;
  }

  // check if the array has odd or even number of elements,
  // push the middle element/elements into middleArray
  if (array.length % 2 === 1) {
    middleArray.push(array[(array.length - 1) / 2]);
  } else {
    middleArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  }

  // return middleArray
  return middleArray;
};


// Test

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4 ,5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);