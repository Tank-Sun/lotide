const assert = require('chai').expect;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns true for eqArrays([1, 2, 3], [1, 2, 3])', () => {
    assert(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
  });
  it('returns false for eqArrays([1, 2, 3], [3, 2, 1])', () => {
    assert(eqArrays([1, 2, 3], [3, 2, 1])).to.be.false;
  });
  it('returns true for eqArrays(["1", "2", "3"], ["1", "2", "3"])', () => {
    assert(eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.be.true;
  });
  it('returns false for eqArrays(["1", "2", "3"], ["1", "2", 3])', () => {
    assert(eqArrays(["1", "2", "3"], ["1", "2", 3])).to.be.false;
  });
});