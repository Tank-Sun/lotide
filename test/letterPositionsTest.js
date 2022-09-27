const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// test code
const words = 'hello';
const str = 'lighthosue in the house';

describe('#letterPositions', () => {
  it('returns [0] for letterPositions(words)["h"]', () => {
    assert.deepEqual(letterPositions(words)["h"], [0]);
  });
  it('returns [1] for letterPositions(words)["e"]', () => {
    assert.deepEqual(letterPositions(words)["e"], [1]);
  });
  it('returns [2, 3] for letterPositions(words)["l"]', () => {
    assert.deepEqual(letterPositions(words)["l"], [2, 3]);
  });
  it('returns [4] for letterPositions(words)["o"]', () => {
    assert.deepEqual(letterPositions(words)["o"], [4]);
  });
  it('returns [0] for letterPositions(str)["l"]', () => {
    assert.deepEqual(letterPositions(str)["l"], [0]);
  });
  it('returns [1, 11] for letterPositions(str)["i"]', () => {
    assert.deepEqual(letterPositions(str)["i"], [1, 11]);
  });
  it('returns [3, 5, 15, 18] for letterPositions(str)["h"]', () => {
    assert.deepEqual(letterPositions(str)["h"], [3, 5, 15, 18]);
  });
  it('returns [12] for letterPositions(str)["n"]', () => {
    assert.deepEqual(letterPositions(str)["n"], [12]);
  });
});