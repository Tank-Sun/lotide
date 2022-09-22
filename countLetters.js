// test assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// actual function
const countLetters = function(string) {
  let result = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result [letter] = 1;
      }
    }
  }
  return result;
};


// Test code
const str = 'lighthosue in the house';
assertEqual(countLetters(str)["l"], 1);
assertEqual(countLetters(str)["g"], 1);
assertEqual(countLetters(str)["h"], 4);