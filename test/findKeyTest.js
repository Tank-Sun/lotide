const assert = require('chai').assert;
const findKey = require('../findKey');

// test code
const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const key1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5);

describe('#findKey', () => {
  it('returns "noma" for key', () => {
    assert.strictEqual(key, "noma");
  });
  it('returns undefined for key1', () => {
    assert.strictEqual(key1, undefined);
  });
});