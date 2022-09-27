const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  Tank: 1,
  Awsome: true
};

describe('#findKeyByValue', () => {
  it('returns "drama" for findKeyByValue(bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined for findKeyByValue(bestTVShowsByGenre, "That \'70s Show")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That \'70s Show"), undefined);
  });
  it('returns "Tank" for findKeyByValue(bestTVShowsByGenre, 1)', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 1), "Tank");
  });
  it('returns "Awsome" for findKeyByValue(bestTVShowsByGenre, true)', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, true), "Awsome");
  });
});