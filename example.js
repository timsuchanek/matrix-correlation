var corr = require('./index');

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

console.log('SAD Correlations:');
console.log('SAD(A,B1) = ' + corr.SAD(A,B_1));
console.log('SAD(A,B2) = ' + corr.SAD(A,B_2));
console.log('\n');
console.log('SSD Correlations:');
console.log('SSD(A,B1) = ' + corr.SSD(A,B_1));
console.log('SSD(A,B2) = ' + corr.SSD(A,B_2));
console.log('\n');
console.log('ZNCC Correlations:');
console.log('ZNCC(A,B1) = ' + corr.ZNCC(A,B_1));
console.log('ZNCC(A,B2) = ' + corr.ZNCC(A,B_2));