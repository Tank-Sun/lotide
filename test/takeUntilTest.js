const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedResults1 = [1, 2, 5, 7, 2];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults2 = ["I've", "been", "to", "Hollywood"];

describe('#takeUntil', () => {
  it('returns expectedResults1 for results1', () => {
    assert.deepEqual(results1, expectedResults1);
  });
  it('returns expectedResults2 for results2', () => {
    assert.deepEqual(results2, expectedResults2);
  });
});