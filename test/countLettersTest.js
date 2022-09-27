const assert = require('chai').assert;
const countLetters = require('../countLetters');

// Test code
const str = 'lighthosue in the house';

describe('#countLetters', () => {
  it('returns 1 for countLetters(str)["l"]', () => {
    assert.strictEqual(countLetters(str)["l"], 1);
  });
  it('returns 1 for countLetters(str)["g"]', () => {
    assert.strictEqual(countLetters(str)["g"], 1);
  });
  it('returns 4 for countLetters(str)["h"]', () => {
    assert.strictEqual(countLetters(str)["h"], 4);
  });
});