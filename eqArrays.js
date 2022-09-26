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

module.exports = eqArrays;
