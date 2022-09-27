const assert = require('chai').assert;
const map = require('../map');


const words = ["ground", "control", "to", "major", "tom"];

const wordLength = map(words, word => word.length);
const expectedLength = [6, 7, 2, 5, 3];

const upperCase = map(words, word => word.toUpperCase());
const expectedUpperCase = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];

const sentense = map(words, word => word + ' is great!');
const expectedSentense = ["ground is great!", "control is great!", "to is great!", "major is great!", "tom is great!"];

describe('#map', () => {
  it('returns expectedLength for wordLength', () => {
    assert.deepEqual(wordLength, expectedLength);
  });
  it('returns expectedUpperCase for upperCase', () => {
    assert.deepEqual(upperCase, expectedUpperCase);
  });
  it('returns expectedSentense for sentense', () => {
    assert.deepEqual(sentense, expectedSentense);
  });
});