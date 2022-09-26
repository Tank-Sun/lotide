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

module.exports = middle;