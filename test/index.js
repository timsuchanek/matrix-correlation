var assert = require('assert');
var corr = require('../index');

var A = [
  [0,0,0],
  [54,54,54],
  [0,54,0]
];

var B_1 = [
  [0,0,0],
  [108,108,108],
  [0,108,0]
];

var B_2 = [
  [0,108,0],
  [54,0,54],
  [0,54,0]
];

describe('SAD', function() {
  it('should calc the SAD for A & B1', function() {
    assert.equal(216, corr.SAD(A, B_1));
  });
  it('should calc the SAD for A & B2', function() {
    assert.equal(162, corr.SAD(A, B_2));
  });
  it('should calc the SAD for B1 & B2', function() {
    assert.equal(378, corr.SAD(B_1, B_2));
  });
});

describe('SSD', function() {
  it('should calc the SSD for A & B1', function() {
    assert.equal(11664, corr.SSD(A, B_1));
  });
  it('should calc the SSD for A & B2', function() {
    assert.equal(14580, corr.SSD(A, B_2));
  });
  it('should calc the SSD for B1 & B2', function() {
    assert.equal(32076, corr.SSD(B_1, B_2));
  });
});

describe('ZNCC', function() {
  it('should calc the ZNCC for A & B1', function() {
    assert.equal(1, corr.ZNCC(A, B_1));
  });
  it('should calc the ZNCC for A & B2', function() {
    var cor = corr.ZNCC(A, B_2);
    assert(0.2539 < cor && cor < 0.2592);
  });
  it('should calc the ZNCC for B1 & B2', function() {
    var cor = corr.ZNCC(B_1, B_2);
    assert(0.2539 < cor && cor < 0.2592);
  });
});