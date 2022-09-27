const assert = require('chai').expect;
const eqObjects = require('../eqObjects');

// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = {d: ["2", 3], c: ["1"]};


describe("#eqObjects", () => {
  it("returns true for eqObjects(ab, ba)", () => {
    assert(eqObjects(ab, ba)).to.be.true;
  });
  it("returns false for eqObjects(ab, abc)", () => {
    assert(eqObjects(ab, abc)).to.be.false;
  });
  it("returns true for eqObjects(cd, dc)", () => {
    assert(eqObjects(cd, dc)).to.be.true;
  });
  it("returns false for eqObjects(cd, cd2)", () => {
    assert(eqObjects(cd, cd2)).to.be.false;
  });
  it("returns false for eqObjects(cd, cd3)", () => {
    assert(eqObjects(cd, cd3)).to.be.false;
  });
});